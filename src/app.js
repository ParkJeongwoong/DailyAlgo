import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routers/index.js";
import articleRouter from "./routers/articles/article.js";

const app = express();
const PORT = 8080;

dotenv.config({ path: ".env.local" });

app.use(cors());
app.use("/", indexRouter);

app.use("/articles", articleRouter);
app.listen(PORT, () => {
  console.log(`Express Server running on http://localhost:${PORT}`);
});
