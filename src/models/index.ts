import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

export { User, Post, Comment };
