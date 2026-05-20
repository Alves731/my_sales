import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { env } from '../../config/env.js'; // Verifique o caminho correto até o seu env.ts

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.db.host,
  port: Number(env.db.port), // Garante que é um número
  username: env.db.user,
  password: env.db.pass,
  database: env.db.name,
  entities: ['./src/modules/**/database/entities/*.{ts, js}'],
  migrations: ['./src/shared/typeorm/migrations/*.{ts,js}']
});