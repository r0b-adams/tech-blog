import { Router } from "express";
import * as users from "./user_handlers";

// /api/users
const router = Router();

router.post("/signup", users.signup);
router.post("/login", users.login);

export { router as userRoutes };
