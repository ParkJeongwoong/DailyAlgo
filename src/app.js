import express from "express";
import cors from "cors";
import indexRouter from "./routers/index.js";
import articleRouter from "./routers/articles/article.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/articles", articleRouter);

app.listen(PORT, () => {
  console.log(`Express Server running on http://localhost:${PORT}`);
});
