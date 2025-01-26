import { drizzle } from "drizzle-orm/mysql2";

let db: ReturnType<typeof drizzle> = null;
export const orm = () => {
  if (!db) {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
    db = drizzle({
      connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
      },
    });
  }

  return db;
};

export * from "./schema.js";
