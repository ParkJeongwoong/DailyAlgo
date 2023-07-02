const getArticles = "SELECT * from board";
const getArticleDetail = "SELECT * from board where idx = ?";
const insertArticle =
  "INSERT INTO board (title, writer, content) VALUES (?, ?, ?)";

const articleQuery = { getArticles, getArticleDetail, insertArticle };
export default articleQuery;
