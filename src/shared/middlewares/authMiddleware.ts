import AppError from "@shared/errors/AppError.js";
import type { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken"; // Removi o 'type Secret' que não é mais necessário

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default class AuthMiddleware {
  static execute(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('JWT Token is missing.', 401);
    }

    const [, token] = authHeader.split(' ');

    // VALIDAÇÃO DO TOKEN: Se o token não existir no split, barra aqui
    if (!token) {
      throw new AppError('Invalid JWT Token format.', 401);
    }

    const secret = process.env.APP_SECRET;

    if (!secret) {
      throw new AppError('Internal Server Error: JWT Secret is missing.', 500);
    }

    try {
      // Usando 'as string' o erro desaparece por completo
      const decodedToken = verify(token, secret);

      const { sub } = decodedToken as ITokenPayload;

      request.user = {
        id: sub
      };

      return next();
    } catch (error) {
      throw new AppError('Invalid JWT Token.', 401);
    }
  }
}