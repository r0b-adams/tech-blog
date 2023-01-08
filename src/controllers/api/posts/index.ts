import { Router } from "express";
import { authenticate } from "../../../middleware";
import * as posts from "./post_handlers";

// /api/posts
const router = Router();

router.post("/", authenticate, posts.create);
router.put("/:post_id", authenticate, posts.update);
router.delete("/:post_id", authenticate, posts.destroy);

export { router as postRoutes };
