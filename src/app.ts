import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes";
import connect from "./db";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json());
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  routes(app);
  connect();
});
