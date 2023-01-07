import { Post } from "./Post";
import { User } from "./User";

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

export { User, Post };
