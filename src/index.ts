import express from "express";
import { SERVER_PORT } from "./config";
import { routes } from "./controllers";
import { db, sessions } from "./services";
import { errorhandlers } from "./middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessions);
app.use(routes);
app.use(errorhandlers.catchAll);

app.listen(SERVER_PORT, async () => {
  const connection = await db.open();
  await connection.sync({ force: false });
  console.log(`connected to database ${connection.config.database}`);
  console.log(`listening on port ${SERVER_PORT}`);
});
