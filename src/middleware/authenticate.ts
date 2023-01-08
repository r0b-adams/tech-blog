import { RequestHandler } from "express";

export const authenticate: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    if (!user_id) {
      req.session.destroy(error => {
        if (error) {
          throw error;
        }
      });
      throw new Error("not authorized");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
