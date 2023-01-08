import { RequestHandler } from "express";

export const authenticate: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    if (!user_id) {
      req.session.destroy(error => {
        if (error) {
          throw error;
        }
        res.redirect("/login");
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
