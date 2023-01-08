import { Op } from "sequelize";
import { Comment } from "../../../models";

export class CommentController {
  static async create(post_id: string, user_id: string, content: string) {
    return await Comment.create({ post_id, user_id, content });
  }

  static async update(id: string, user_id: string, content: string) {
    return await Comment.update(
      { content },
      { where: { [Op.and]: [{ id }, { user_id }] } }
    );
  }

  static async delete(id: string, user_id: string) {
    return await Comment.destroy({ where: { [Op.and]: [{ id }, { user_id }] } });
  }
}
