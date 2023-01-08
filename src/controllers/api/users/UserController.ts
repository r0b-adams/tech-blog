import { User } from "../../../models";

export class UserController {
  private static async adminFindUserByUsername(username: string) {
    return await User.findOne({ where: { username } });
  }

  static async signup(username: string, email: string, password: string) {
    const user = await this.adminFindUserByUsername(username);
    if (user) {
      throw new Error("an account with that username exists");
    }
    return await User.create({ username, email, password });
  }

  static async login(username: string, password: string) {
    const user = await this.adminFindUserByUsername(username);
    if (!user) {
      throw new Error("wrong username or password");
    }
    const validPassword = await user.checkPassword(password);
    if (!validPassword) {
      throw new Error("wrong username or password");
    }
    return user;
  }

  static async updatePassword(id: string, password: string) {
    await User.update({ password }, { where: { id }, individualHooks: true });
  }
}
