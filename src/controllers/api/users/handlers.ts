import { RequestHandler } from "express";
import { UserController } from "./UserController";

// POST /api/users/signup
export const signup: RequestHandler = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserController.signup(username, email, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
