import "express-session";

declare module "express-session" {
  export interface SessionData {
    user_id?: string;
  }
}
