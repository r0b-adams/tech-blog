import { RequestHandler } from "express";
import { PostController } from "../api/posts/PostController";

export const home: RequestHandler = async (req, res, next) => {
  try {
    const posts = await PostController.getAllPosts();
    res.render("home", {
      layout: "main",
      home: true,
      logged_in: req.session.user_id ? true : false,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const dashboard: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const posts = await PostController.getUserPosts(user_id!);
    res.render("dashboard", {
      layout: "main",
      dashboard: true,
      logged_in: req.session.user_id ? true : false,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const signup: RequestHandler = async (req, res, next) => {
  try {
    res.render("signup", {
      layout: "main",
      signup: true,
      logged_in: req.session.user_id ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    res.render("login", {
      layout: "main",
      login: true,
      logged_in: req.session.user_id ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

export const singlePost: RequestHandler = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { user_id } = req.session;
    res.status(200).json({ message: "SINGLE POST VIEW" });
  } catch (error) {
    next(error);
  }
};

export const code404: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "404 NOT FOUND VIEW" });
  } catch (error) {
    next(error);
  }
};
