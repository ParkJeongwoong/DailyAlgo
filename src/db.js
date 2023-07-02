import mysql from "mysql";
import dbConfig from "./config/dbConfig.js";

let pool = mysql.createPool(dbConfig);

const getConnection = callback => {
  return pool.getConnection((err, conn) => {
    if (err) {
      console.error("Connection Error : " + err.stack);
    } else {
      callback(conn);
    }
  });
};

export default { getConnection };
