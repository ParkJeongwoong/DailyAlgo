import articleQuery from "./article.query";
import db from "../../db.js";
import { Request, Response } from "express";

export const getArticles = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      conn.query(articleQuery.getArticles, (error, rows) => {
        if (error) throw error;
        res.status(200).send(rows);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getArticleDetail = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [req.params.id];
      conn.query(
        articleQuery.getArticleDetail,
        params,
        (error, rows) => {
          if (error) throw error;
          if (!rows || rows.length === 0) return res.status(404).send("Article does not exist.");
          const article = rows[0];
          res.status(200).json(article);
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const insertArticle = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [req.body.title, req.body.writer, req.body.content];
      conn.query(articleQuery.insertArticle, params, (error, rows) => {
        if (error) throw error;
        res.status(200).json(rows.insertId);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [
        req.body.title,
        req.body.writer,
        req.body.content,
        req.params.id,
      ];
      conn.query(articleQuery.updateArticle, params, (error, rows) => {
        if (error) throw error;
        res.status(200).json(rows.info);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    await db.getConnection(conn => {
      const params = [req.params.id];
      conn.query(articleQuery.deleteArticle, params, (error, rows) => {
        if (error) throw error;
        res.status(200).json(rows.affectedRows);
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
