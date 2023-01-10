import { db } from "../../services";
import { generatePostData, userData } from "./helpers";
import { User } from "..";
import { Post } from "..";

const seed = async () => {
  await db.connection.sync({ force: true });

  const userModels = await User.bulkCreate(userData, {
    // enable all hooks to allow pw hashing
    validate: true,
    hooks: true,
    individualHooks: true,
  });

  console.log("users seeded!");

  const userIds = userModels.map(model => model.id);

  for await (const user_id of userIds) {
    const postData = generatePostData(user_id);
    const postModels = await Post.bulkCreate(postData);
  }

  console.log("posts seeded!");

  await db.close();
};

seed();
