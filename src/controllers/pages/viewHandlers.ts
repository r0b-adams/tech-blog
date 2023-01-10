import { RequestHandler } from "express";
import { PostController } from "../api/posts/PostController";

// /
export const home: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const posts = await PostController.getAllPosts();
    res.render("home", {
      layout: "main",
      page: { home: true },
      logged_in: user_id ? true : false,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

// /dashboard
export const dashboard: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const posts = await PostController.getUserPosts(user_id!);
    res.render("dashboard", {
      layout: "main",
      view: { dashboard: true },
      logged_in: user_id ? true : false,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

// /signup
export const signup: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    res.render("signup", {
      layout: "main",
      view: { signup: true },
      logged_in: user_id ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

// /login
export const login: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    res.render("login", {
      layout: "main",
      view: { login: true },
      logged_in: user_id ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

// /posts/:post_id
export const singlePost: RequestHandler = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { user_id } = req.session;
    const post = await PostController.getPost(post_id);
    res.render("post", {
      layout: "main",
      view: { single_post: true },
      logged_in: user_id ? true : false,
      post: {
        ...post,
        editable: user_id === post?.user_id,
      },
    });
  } catch (error) {
    next(error);
  }
};

// /dashboard/new-post
export const newPost: RequestHandler = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    res.render("new-post", {
      layout: "main",
      view: { new_post: true },
      logged_in: user_id ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

export const _404: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({ message: "404 NOT FOUND VIEW" });
  } catch (error) {
    next(error);
  }
};
