import Express from "express";
import { router } from "./route";

const app = Express();

app.use(Express.json());

app.use(router);

app.listen(3333, () =>
  console.log("Server is running on http://localhost:3333")
);