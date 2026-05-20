import 'dotenv/config';
import express from 'express';
import 'reflect-metadata'
import { AppDataSource } from '@shared/typeorm/data-source.js';
import 'express-async-errors'
import cors from 'cors';
import { healthRoutes } from './routes/index.js';
import ErrorHandleMiddleware from '@shared/middlewares/ErrorHandleMiddleware.js';

import { error } from 'node:console';

AppDataSource.initialize()
.then(async () => {
  const app = express();

app.use(cors());
app.use(express.json());
app.use(healthRoutes);
app.use(ErrorHandleMiddleware.haddleError);

console.log('Connected to the database!')

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`🏆 Servidor rodando na porta ${PORT}`);
});
})
.catch(error => {
  console.error('Failed to connect to the database:', error);
});


