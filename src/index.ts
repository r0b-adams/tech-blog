import express from "express";
import { routes } from "./controllers";
import { db, sessions } from "./services";
import { SERVER_PORT } from "./config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessions);
app.use(routes);

app.listen(SERVER_PORT, async () => {
  const connection = await db.open();
  console.log(`connected to database ${connection.config.database}`);
  console.log(`listening on port ${SERVER_PORT}`);
});
