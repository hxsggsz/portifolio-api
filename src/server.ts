import Express from "express";
import { router } from "./route";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = Express();

app.use(Express.json());

app.use(cors(corsOptions));

app.use(router);

app.listen(3333, () => console.log("rodando em http://localhost:3333"));
