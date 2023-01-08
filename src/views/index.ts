import { Express } from "express";
import { create } from "express-handlebars";
import * as helpers from "./helpers";

export const hbs = create({ helpers });

export const setViewEngine = (app: Express) => {
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  app.set("views", __dirname);
};
