import { User} from '../database/entities/User.js'
import { usersRepositories } from '../database/repositories/UserRepositores.js'

export default class ListUserService {
  async execute(): Promise<User[]> {
    const users = await usersRepositories.find()

    return users
  }
}