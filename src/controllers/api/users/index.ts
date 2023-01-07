import { Router } from "express";
import * as users from "./UuserHandlers";

// /api/users
const router = Router();

router.post("/signup", users.signup);
router.post("/login", users.login);

export { router as userRoutes };
