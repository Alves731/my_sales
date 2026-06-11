import type { Request, Response } from "express";
import SessionUserService from "../services/SessionUserService.js";
import { Session } from "node:inspector";

export default class SessionsContorllers {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password} = request.body
    const createSession = new SessionUserService()

    const userToken = await createSession.execute({
      email,
      password
    })

    return response.json(userToken)
  }
}