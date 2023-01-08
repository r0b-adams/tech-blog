import { RequestHandler } from "express";
import { CommentController } from "./CommentController";

export const create: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const { post_id, content } = req.body;
    const comment = await CommentController.create(post_id, user_id!, content);
    res.status(200).json({ msg: "comment created", comment });
  } catch (error) {
    next(error);
  }
};

export const update: RequestHandler = async (req, res, next) => {
  try {
    const { comment_id } = req.params;
    const { user_id } = req.session;
    const { content } = req.body;
    await CommentController.update(comment_id, user_id!, content);
    res.status(200).json({ msg: "comment updated" });
  } catch (error) {
    next(error);
  }
};

export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const { comment_id } = req.params;
    const { user_id } = req.session;
    await CommentController.delete(comment_id, user_id!);
    res.status(200).json({ msg: "comment deleted" });
  } catch (error) {
    next(error);
  }
};
