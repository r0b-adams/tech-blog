import * as dotenv from "dotenv";
export { ENV_TYPE } from "./types";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || "DEVELOPMENT";
export const SERVER_PORT = process.env.PORT || 3001;
export const DB_CONFIG = {
  URI: process.env.DB_URI || "",
  DATABASE: process.env.DB_NAME || "",
  USERNAME: process.env.DB_USERNAME || "",
  PASSWORD: process.env.DB_PASSWORD || "",
  PASSWORD_HASH_SALT_ROUNDS: 10,
  SESSION_SECRET: process.env.SESSION_SECRET || "",
};
