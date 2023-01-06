import { DB_CONFIG } from "../config";
import { DatabaseService } from "./Database";
import { SessionService } from "./Session";

// initialize services

export const db = DB_CONFIG.URI
  ? // production
    DatabaseService.connect({
      uri: DB_CONFIG.URI,
    })
  : // development
    DatabaseService.connect({
      database: DB_CONFIG.DATABASE,
      username: DB_CONFIG.USERNAME,
      password: DB_CONFIG.PASSWORD,
    });

export const sessions = SessionService.useSessions(db.connection);
