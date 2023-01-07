import { Router } from "express";
import { apiRoutes } from "./api";
import { viewRoutes } from "./views";

const router = Router();

router.use("/api", apiRoutes);
router.use(viewRoutes);

export { router as routes };
