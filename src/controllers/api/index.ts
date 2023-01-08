import { Router } from "express";
import { userRoutes } from "./users";
import { postRoutes } from "./posts";
import { commentRoutes } from "./comments";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

export { router as apiRoutes };
