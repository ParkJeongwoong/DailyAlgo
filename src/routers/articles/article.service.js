import articleQuery from "./article.query.js";
import db from "../../db.js";

export const showJson = (req, res) => {
  res.status(200).json({
    response: "success",
    message: "JSON 응답",
  });
};

export const getArticles = async (req, res) => {
  try {
    await db.getConnection(conn => {
      conn.query(articleQuery.getArticles, (error, rows, fields) => {
        if (error) throw error;
        res.status(200).send(rows);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getArticleDetail = async (req, res) => {
  try {
    await db.getConnection(conn => {
      const params = [req.params.id];
      conn.query(
        articleQuery.getArticleDetail,
        params,
        (error, rows, fields) => {
          if (!rows || rows.length === 0) return null;
          const article = rows[0];
          if (error) throw error;
          if (article) {
            res.status(200).json(article);
          } else {
            res.status(404).send("Article does not exist.");
          }
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const insertArticle = async (req, res) => {
  try {
    await db.getConnection(conn => {
      const params = [req.body.title, req.body.writer, req.body.content];
      conn.query(articleQuery.insertArticle, params, (error, rows, fields) => {
        if (error) throw error;
        res.status(200).json(rows.insertId);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateArticle = async (req, res) => {
  try {
    await db.getConnection(conn => {
      const params = [
        req.body.title,
        req.body.writer,
        req.body.content,
        req.params.id,
      ];
      conn.query(articleQuery.updateArticle, params, (error, rows, fields) => {
        if (error) throw error;
        res.status(200).json(rows.info);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await db.getConnection(conn => {
      const params = [req.params.id];
      conn.query(articleQuery.deleteArticle, params, (error, rows, fields) => {
        if (error) throw error;
        res.status(200).json(rows.affectedRows);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
