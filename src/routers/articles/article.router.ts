import express, { Request, Response, Router } from "express";
import {
  getArticles,
  getArticleDetail,
  insertArticle,
  updateArticle,
  deleteArticle,
} from "./article.service.js";

const articleRouter: Router = express.Router();

articleRouter.get("/", (req: Request, res: Response) => {
  getArticles(res);
});

articleRouter.get("/:id", (req: Request, res: Response) => {
  getArticleDetail(req, res);
});

articleRouter.put("/:id", (req: Request, res: Response) => {
  updateArticle(req, res);
});

articleRouter.delete("/:id", (req: Request, res: Response) => {
  deleteArticle(req, res);
});

articleRouter.post("/", (req: Request, res: Response) => {
  insertArticle(req, res);
});

export default articleRouter;
