import productsRouter from '@modules/product/routes/ProductRoutes.js';
import sessionsRouter from '@modules/users/routes/SessionRoutes.js';
import { celebrate, Joi, Segments } from 'celebrate';
import userRouter from '@modules/users/routes/UserRoutes.js';
import { Router } from 'express';


const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ status: 'ok', message: 'Hello Dev! Iam Alive!' });
});
routes.use('/products', productsRouter)
routes.use('/users', userRouter)
routes.use('/sessions', sessionsRouter)

// Correção aqui: exporta as rotas criadas com o nome esperado pelo server.ts
export { routes as healthRoutes };