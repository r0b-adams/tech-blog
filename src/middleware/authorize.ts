import { RequestHandler } from "express";

export const authorize: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    if (!user_id) {
      if (req.originalUrl === "/dashboard") {
        return res.redirect("/login");
      }
      throw new Error("not authorized");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
