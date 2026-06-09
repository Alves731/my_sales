import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";
import { create } from "node:domain";
import { createUserSchema } from "../schemas/UserSchemas.js";

const userRouter = Router()
const usersController = new UsersControllers()

userRouter.get('/', usersController.index)
userRouter.post('/', createUserSchema, usersController.create)

export default userRouter