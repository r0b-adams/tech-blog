import { Router } from "express";
import { authorize } from "../../../middleware";
import * as posts from "./postHandlers";

// /api/posts
const router = Router();

router.post("/", authorize, posts.create);
router.put("/:post_id", authorize, posts.update);
router.delete("/:post_id", authorize, posts.destroy);

export { router as postRoutes };
