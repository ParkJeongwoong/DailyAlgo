import express from "express";
import {
  showJson,
  getArticles,
  getArticleDetail,
  insertArticle,
} from "./article.controller.js";

const articleRouter = express.Router();

articleRouter.get("/json", (req, res) => {
  showJson(req, res);
});

articleRouter.get("/", (req, res) => {
  getArticles(req, res);
});

articleRouter.get("/:id", (req, res) => {
  getArticleDetail(req, res);
});

articleRouter.post("/", (req, res) => {
  insertArticle(req, res);
});

export default articleRouter;
