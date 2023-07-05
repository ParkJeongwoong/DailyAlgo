import express, { Application } from "express";
import cors from "cors";
import indexRouter from "./routers/index";
import articleRouter from "./routers/articles/article.router";

const app: Application = express();
const PORT: number = 8080;

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/articles", articleRouter);

app.listen(PORT, () => {
  console.log(`Express Server running on http://localhost:${PORT}`);
});
