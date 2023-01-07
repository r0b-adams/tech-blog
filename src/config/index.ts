import * as dotenv from "dotenv";
dotenv.config();

export const SERVER_PORT = process.env.PORT || 3001;
export const DB_CONFIG = {
  URI: process.env.DB_URI || "",
  DATABASE: process.env.DB_NAME || "",
  USERNAME: process.env.DB_USERNAME || "",
  PASSWORD: process.env.DB_PASSWORD || "",
  HASH_SALT_ROUNDS: 10,
  SESSION_SECRET: process.env.SESSION_SECRET || "",
};
