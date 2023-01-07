import { User } from "../../../models";

export class UserController {
  private static User = User;

  public static signup(username: string, email: string, password: string) {
    return this.User.create({ username, email, password });
  }
}
