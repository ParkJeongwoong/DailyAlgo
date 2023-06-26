import articleService from "./article.service.js";

export const showJson = (req, res) => {
  res.status(200).json({
    response: "success",
    message: "JSON 응답",
  });
};

export const getArticles = (req, res) => {
  try {
    const rows = articleService.getArticles();
    res.send(rows);
  } catch (error) {
    return res.status(500).json(error);
  }
};
