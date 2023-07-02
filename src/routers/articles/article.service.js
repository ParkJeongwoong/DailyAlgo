import articleQuery from "./article.query.js";
import db from "../../db.js";

export const getArticles = async () => {
  return await db.getConnection(conn => {
    const data = conn.query(articleQuery.getArticles, (error, rows, fields) => {
      console.log(rows);
      return { rows, error };
    });
    conn.release();
    if (data.error) throw data.error;
    return data.rows;
  });
};

export const getArticleDetail = async articleId => {
  return await db.getConnection(conn => {
    const params = [articleId];
    const data = conn.query(
      articleQuery.getArticleDetail,
      params,
      (error, rows, fields) => {
        if (!rows || rows.length === 0) return null;
        const article = rows[0];
        console.log(article);
        return { rows, error };
      }
    );
    conn.release();
    if (data.error) throw data.error;
    return data.rows;
  });
};

export const insertArticle = async (title, writer, content) => {
  return await db.getConnection(conn => {
    const params = [title, writer, content];
    const data = conn.query(
      articleQuery.insertArticle,
      params,
      (error, rows, fields) => {
        console.log(rows);
        return { rows, error };
      }
    );
    conn.release();
    if (data.error) throw data.error;
    return data.rows;
  });
};

const articleService = { getArticles, getArticleDetail, insertArticle };

export default articleService;
