import { Router } from "express";
import SessionsContorllers from "../controllers/SessionsControllers.js";
import { sessionSchema } from "../schemas/SessionSchema.js";

const sessionsRouter = Router()
const SessionsContorller = new SessionsContorllers()

sessionsRouter.post('/', sessionSchema, SessionsContorller.create)

export default sessionsRouter