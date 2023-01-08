import { RequestHandler } from "express";
import { PostController } from "./PostController";

export const create: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const { title, content } = req.body;
    const post = await PostController.createPost(user_id!, title, content);
    res.status(200).json({ msg: "post created", post });
  } catch (error) {
    next(error);
  }
};

export const update: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const { post_id } = req.params;
    const { title, content } = req.body;
    await PostController.updatePost(post_id, user_id!, title, content);
    res.status(200).json({ msg: "post updated" });
  } catch (error) {
    next(error);
  }
};

export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const { post_id } = req.params;
    await PostController.deletePost(post_id, user_id!);
    res.status(200).json({ msg: "post deleted" });
  } catch (error) {
    next(error);
  }
};
