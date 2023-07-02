import articleService from "./article.service.js";

export const showJson = (req, res) => {
  res.status(200).json({
    response: "success",
    message: "JSON 응답",
  });
};

export const getArticles = async (req, res) => {
  try {
    const rows = await articleService.getArticles();
    res.send(rows);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getArticleDetail = async (req, res) => {
  try {
    const article = await articleService.getArticleDetail(req.params.id);
    console.log(article);
    if (!article) {
      return res.status(404).send("Article does not exist.");
    }
    res.status(200).json(article);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const insertArticle = async (req, res) => {
  try {
    const rows = await articleService.insertArticle(
      req.body.title,
      req.body.writer,
      req.body.content
    );
    res.status(200).send(rows);
  } catch (error) {
    return res.status(500).json(error);
  }
};
