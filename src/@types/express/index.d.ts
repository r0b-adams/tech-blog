import "express-session";

declare module "express-session" {
  export interface SessionData {
    logged_in?: boolean;
  }
}