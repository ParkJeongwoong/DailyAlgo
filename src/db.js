import mysql from "mysql2";
import dbConfig from "./config/dbConfig.js";

let pool = mysql.createPool(dbConfig);

const getConnection = callback => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.error("Connection Error : " + err.stack);
    } else {
      callback(conn);
      pool.releaseConnection(conn);
    }
  });
};

export default { getConnection };
