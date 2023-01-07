import { User } from "../../../models";

export class UserController {
  private static User = User;

  public static async adminFindUserByUsername(username: string) {
    return await this.User.findOne({ where: { username } });
  }

  public static async signup(username: string, email: string, password: string) {
    const user = await this.adminFindUserByUsername(username);
    if (user) {
      throw new Error("an account with that username exists");
    }
    return await this.User.create({ username, email, password });
  }

  public static async login(username: string, password: string) {
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
}
