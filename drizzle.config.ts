import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    database: DB_NAME!,
    host: DB_HOST!,
    password: DB_PASSWORD,
    port: parseInt(DB_PORT!),
    user: DB_USER,
  },
});
