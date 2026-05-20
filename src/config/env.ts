import 'dotenv/config';

if (!process.env.DB_HOST || !process.env.DB_NAME) {
  throw new Error("Erro: Variáveis de ambiente essenciais estão faltando no arquivo .env!");
}

export const env = {
  db: {
    host: process.env.DB_HOST as string,
    port: process.env.PORT ? +process.env.PORT : 5432,
    user: process.env.DB_USER || 'postgres',
    pass: process.env.DB_PASS || 'postgres',
    name: process.env.DB_NAME as string,
  },
  server: {
    port: process.env.SERVER_PORT ? +process.env.SERVER_PORT : 3333
  }
};