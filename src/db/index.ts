import { drizzle } from "drizzle-orm/mysql2";
import { initEnv } from "../core/index.js";

initEnv();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
export const db = drizzle({
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
  },
});

export * from "./schema.js";
