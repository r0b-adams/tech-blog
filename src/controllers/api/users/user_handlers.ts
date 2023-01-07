import { RequestHandler } from "express";
import { UserController } from "./UserController";

// POST /api/users/signup
export const signup: RequestHandler = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserController.signup(username, email, password);
    req.session.save(error => {
      if (error) {
        throw error;
      }
      req.session.user_id = user.id;
      res.json({ msg: "signup successful", user });
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/users/login
export const login: RequestHandler = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserController.login(username, password);
    req.session.save(error => {
      if (error) {
        throw error;
      }
      req.session.user_id = user.id;
      res.json({ msg: "login successful", user });
    });
  } catch (error) {
    next(error);
  }
};

export const updatePassword: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const { password } = req.body;
    if (!user_id || !password) {
      throw new Error("error updating password");
    }
    await UserController.updatePassword(user_id, password);
    res.status(201).json({ msg: "password updated" });
  } catch (error) {
    next(error);
  }
};
