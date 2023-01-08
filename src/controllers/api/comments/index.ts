import { Router } from "express";
import { authorize } from "../../../middleware";
import * as comments from "./comment_handlers";

// /api/comments
const router = Router();

router.post("/", authorize, comments.create);
router.put("/:comment_id", authorize, comments.update);
router.delete("/:comment_id", authorize, comments.destroy);

export { router as commentRoutes };
