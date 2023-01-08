import { Router } from "express";
import { authorize } from "../../middleware";
import * as pages from "./page_handlers";

const router = Router();

router.get("/", pages.home);
router.get("/dashboard", authorize, pages.dashboard);
router.get("/signup", pages.signup);
router.get("/login", pages.login);
router.get("/posts/:post_id", pages.singlePost);
router.get("*", pages.code404);

export { router as pageRoutes };
