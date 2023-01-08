import { Router } from "express";
import { authorize } from "../../../middleware";
import * as users from "./user_handlers";

// /api/users
const router = Router();

router.post("/signup", users.signup);
router.post("/login", users.login);
router.put("/update-password", authorize, users.updatePassword);
router.delete("/logout", users.logout);

export { router as userRoutes };
