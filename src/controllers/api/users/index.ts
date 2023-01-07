import { Router } from "express";
import * as users from "./handlers";

// /api/users

const router = Router();

router.post("/signup", users.signup);

export { router as userRoutes };
