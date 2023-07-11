import express, { Router } from "express";
import {
  getArticles,
  getArticleDetail,
  insertArticle,
  updateArticle,
  deleteArticle,
} from "./article.service";

const articleRouter: Router = express.Router();

articleRouter.get("/", getArticles);

articleRouter.get("/:id", getArticleDetail);

articleRouter.put("/:id", updateArticle);

articleRouter.delete("/:id", deleteArticle);

articleRouter.post("/", insertArticle);

export default articleRouter;
