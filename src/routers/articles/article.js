import express from "express";
import {
  showJson,
  getArticles,
  getArticleDetail,
  insertArticle,
  updateArticle,
  deleteArticle,
} from "./article.service.js";

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

articleRouter.put("/:id", (req, res) => {
  updateArticle(req, res);
});

articleRouter.delete("/:id", (req, res) => {
  deleteArticle(req, res);
});

articleRouter.post("/", (req, res) => {
  insertArticle(req, res);
});

export default articleRouter;
