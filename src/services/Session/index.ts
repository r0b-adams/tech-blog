import { DB_CONFIG } from "../../config";
import { Sequelize } from "sequelize";
import session from "express-session";
import connect from "connect-session-sequelize";

const SequelizeStore = connect(session.Store);

export class SessionService {
  public static useSession(sequelize: Sequelize) {
    return session({
      store: new SequelizeStore({ db: sequelize }),
      secret: DB_CONFIG.SESSION_SECRET,
      cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      },
      saveUninitialized: true,
      resave: false,
    });
  }
}
