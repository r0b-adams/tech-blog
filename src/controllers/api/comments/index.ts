import { Router } from "express";
import { authenticate } from "../../../middleware";
import * as comments from "./comment_handlers";

// /api/comments
const router = Router();

router.post("/", authenticate, comments.create);
router.put("/:comment_id", authenticate, comments.update);
router.delete("/:comment_id", authenticate, comments.destroy);

export { router as commentRoutes };
