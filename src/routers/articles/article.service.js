import articleQuery from "./article.query.js";
import mysql from "mysql";
import dbConfig from "../../config/dbConfig.js";

export const getArticles = async () => {
  const connection = mysql.createPool(dbConfig);
  connection.query(articleQuery.getArticles, (error, rows, fields) => {
    if (error) throw error;
    console.log(rows);
    return rows;
  });
  connection.end();
};

const articleService = { getArticles };

export default articleService;
