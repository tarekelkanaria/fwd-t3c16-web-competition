import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import movie_routes from "./handlers/movie_routes";

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});
movie_routes(app);

// user_routes(app)

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});
