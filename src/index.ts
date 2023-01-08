import path from "path";
import express from "express";
import { SERVER_PORT } from "./config";
import { db, sessions } from "./services";
import { setViewEngine } from "./views";
import { routes } from "./controllers";
import { errorHandlers } from "./middleware";

const app = express();

setViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const static_url = path.join(__filename, "../public");
console.log(static_url);
app.use(express.static(static_url));
app.use(sessions);
app.use(routes);
app.use(errorHandlers.catchAll);

app.listen(SERVER_PORT, async () => {
  const connection = await db.open();
  await connection.sync({ force: false });
  console.log(`connected to database ${connection.config.database}`);
  console.log(`listening on port ${SERVER_PORT}`);
});
