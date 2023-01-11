import { db } from "../services";
import { DB_CONFIG } from "../config";
import { compare, hash } from "bcrypt";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;

  // static class methods
  static async hashPassword(password: string) {
    return await hash(password, DB_CONFIG.PASSWORD_HASH_SALT_ROUNDS);
  }

  // instance methods
  async comparePassword(password: string) {
    return await compare(password, this.password);
  }
}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    modelName: "user",
    sequelize: db.connection,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

User.beforeCreate(async user => {
  user.password = await User.hashPassword(user.password);
});

User.beforeUpdate(async (user, options) => {
  if (options.fields?.includes("password")) {
    user.password = await User.hashPassword(user.password);
  }
});
