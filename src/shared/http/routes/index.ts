import productsRouter from '@modules/product/routes/ProductRoutes.js';
import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import userRouter from '@modules/users/routes/UserRoutes.js';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ status: 'ok', message: 'Hello Dev! Iam Alive!' });
});
routes.use('/products', productsRouter)
routes.use('/users', userRouter)

// Correção aqui: exporta as rotas criadas com o nome esperado pelo server.ts
export { routes as healthRoutes };