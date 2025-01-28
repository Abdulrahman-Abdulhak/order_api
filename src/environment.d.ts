declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_HOST: string;
      SERVER_PORT: number;
      API_VERSION: `v${number}`;

      NODE_ENV: "development" | "production";

      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_NAME: string;
      DB_PASSWORD: string;
    }
  }
}

export {};
