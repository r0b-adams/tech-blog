import { Router } from "express";
import * as users from "./user_handlers";

// /api/users
const router = Router();

router.post("/signup", users.signup);
router.post("/login", users.login);

router.put("/update-password", users.updatePassword);

export { router as userRoutes };
