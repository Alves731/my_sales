import AppError from '@shared/errors/AppError.js'
import { User } from '../database/entities/User.js'
import { usersRepositories } from '../database/repositories/UserRepositores.js'
import { hash } from 'bcrypt'


interface ICreateUser {
  name: string;
  email: string;
  password: string
}

export default class CreateUserService {
  async execute({ name, email, password}: ICreateUser): Promise<User> {
    const emailExists = await usersRepositories.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.', 409)
    }
//ao colocar o "numero" vai dar erro istalar npm install bcrypt
//npm install --save-dev @types/bcrypt  e import { hash } from 'bcrypt'
    const hashedPassword = await hash(password, 10);

    const user = usersRepositories.create({
      name,
      email,
      password: hashedPassword
    })

    await usersRepositories.save(user)

    return user
  }
}