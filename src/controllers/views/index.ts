import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "HOMEPAGE VIEW" });
});

// render a logged-in user's own posts
// redirect to login if unauthenticated
router.get("/dashboard", (req, res) => {
  res.status(200).json({ message: "DASHBOARD VIEW" });
});

// render the login page
router.get("/login", (req, res) => {
  res.status(200).json({ message: "LOGIN VIEW" });
});

// render the signup page
router.get("/signup", (req, res) => {
  res.status(200).json({ message: "SIGNUP VIEW" });
});

// view a single post
router.get("/posts/:id", (req, res) => {
  res.status(200).json({ message: "POST VIEW" });
});

router.get("*", (req, res) => {
  res.status(404).json({ message: "404 VIEW" });
});

export { router as viewRoutes };
