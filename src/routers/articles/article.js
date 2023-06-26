import express from "express";
import { showJson, getArticles } from "./article.controller.js";

const articleRouter = express.Router();

articleRouter.get("/json", (req, res) => {
  showJson(req, res);
});

articleRouter.get("/", (req, res) => {
  getArticles(req, res);
});

export default articleRouter;
