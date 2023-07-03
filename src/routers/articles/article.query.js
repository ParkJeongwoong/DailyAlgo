const getArticles = "SELECT * from board";
const getArticleDetail = "SELECT * from board where idx = ?";
const insertArticle =
  "INSERT INTO board (title, writer, content) VALUES (?, ?, ?)";
const updateArticle =
  "UPDATE board SET title = ?, writer = ?, content = ? WHERE idx = ?";
const deleteArticle = "DELETE FROM board WHERE idx = ?";

const articleQuery = {
  getArticles,
  getArticleDetail,
  insertArticle,
  updateArticle,
  deleteArticle,
};
export default articleQuery;
