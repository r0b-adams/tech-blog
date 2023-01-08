import { Op } from "sequelize";
import { Post } from "../../../models";

export class PostController {
  public static async createPost(user_id: string, title: string, content: string) {
    return await Post.create({ user_id, title, content });
  }

  public static async updatePost(
    id: string,
    user_id: string,
    title: string,
    content: string
  ) {
    return await Post.update(
      { title, content },
      { where: { [Op.and]: [{ id }, { user_id }] }, returning: true }
    );
  }

  public static async deletePost(id: string, user_id: string) {
    return await Post.destroy({
      where: {
        [Op.and]: [{ id }, { user_id }],
      },
    });
  }
}
