import path from "path";
import express from "express";
import { create } from "express-handlebars";
import { db, sessions } from "./services";
import { routes } from "./controllers";
import { errorHandlers } from "./middleware";
import { viewHelpers as helpers } from "./utils";
import { SERVER_PORT } from "./config";

const app = express();

// set view engine as handlebars
const hbs = create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(sessions);
app.use(routes);
app.use(errorHandlers.catchAll);

app.listen(SERVER_PORT, async () => {
  const connection = await db.open();
  await connection.sync({ force: false });
  console.log(`connected to database ${connection.config.database}`);
  console.log(`listening on port ${SERVER_PORT}`);
});
