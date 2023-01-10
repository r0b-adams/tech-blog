import { Op } from "sequelize";
import { Post, User, Comment } from "../../../models";

export class PostController {
  static async getPost(id: string) {
    const post = await Post.findByPk(id);
    return post?.get({ plain: true });
  }

  static async createPost(user_id: string, title: string, content: string) {
    const post = await Post.create({ user_id, title, content });
    return post.get({ plain: true });
  }

  static async updatePost(id: string, user_id: string, title: string, content: string) {
    return await Post.update(
      { title, content },
      { where: { [Op.and]: [{ id }, { user_id }] } }
    );
  }

  static async deletePost(id: string, user_id: string) {
    return await Post.destroy({
      where: { [Op.and]: [{ id }, { user_id }] },
    });
  }

  static async getAllPosts() {
    const posts = await Post.findAll({
      order: [["created_at", "DESC"]],
      attributes: ["id", "title", "content", "created_at"],
      include: [{ model: User, attributes: ["username"] }, Comment],
    });
    return posts.map(model => model.get({ plain: true }));
  }

  static async getUserPosts(user_id: string) {
    const posts = await Post.findAll({
      where: { user_id },
      order: [["created_at", "DESC"]],
      attributes: ["id", "title", "content", "created_at"],
      include: Comment,
    });
    return posts.map(model => model.get({ plain: true }));
  }
}
