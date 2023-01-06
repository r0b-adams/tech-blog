import { Router } from "express";

const router = Router();

// /api/users

// set up CRUD ops

router.get("*", (req, res) => {
  res.status(200).json({ message: "USER ROUTES HERE" });
});

export { router as userRoutes };
