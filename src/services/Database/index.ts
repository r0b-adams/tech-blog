import { Sequelize } from "sequelize";
import { DatabaseServiceOptions } from "./types";

export class DatabaseService {
  private static instance: DatabaseService;
  private sequelize: Sequelize;

  private constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
  }

  get connection() {
    return this.sequelize;
  }

  private static useProduction(uri: string) {
    const production_connection = new Sequelize(uri);
    this.instance = new DatabaseService(production_connection);
    return this.instance;
  }

  private static useDevelopment(database: string, username: string, password: string) {
    const development_connection = new Sequelize(database, username, password, {
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      logging: false,
    });
    this.instance = new DatabaseService(development_connection);
    return this.instance;
  }

  public static connect(options: DatabaseServiceOptions) {
    if (this.instance) {
      return this.instance;
    }
    const { uri, database, username, password } = options;
    if (uri) {
      return this.useProduction(uri);
    }
    if (database && username && password) {
      return this.useDevelopment(database, username, password);
    }
    throw new Error("Unable to establish database connection");
  }

  public async open() {
    return await this.connection.sync({ force: false });
  }

  public async close() {
    await this.connection.close();
  }
}
