import mysql from "mysql2";
import dbConfig from "./config/dbConfig.js";

let pool = mysql.createPool(dbConfig);

pool.getConnection((err, conn) => {
  if (err) {
    console.error("Inital Job - Connection Error : " + err.stack);
  } else {
    const articleTableSQL = `CREATE TABLE IF NOT EXISTS board (
      idx INT NOT NULL AUTO_INCREMENT COMMENT '번호 (PK)',
      title VARCHAR(100) NOT NULL COMMENT '제목',
      content VARCHAR(3000) NOT NULL COMMENT '내용',
      writer VARCHAR(20) NOT NULL COMMENT '작성자',
      view_cnt INT NOT NULL DEFAULT 0 COMMENT '조회 수',
      insert_time DATETIME NOT NULL DEFAULT NOW() COMMENT '등록일',
      update_time DATETIME NULL COMMENT '수정일',
      delete_time DATETIME NULL COMMENT '삭제일',
      PRIMARY KEY (idx)
    ) COMMENT '게시판'`;

    const userTableSQL = `CREATE TABLE IF NOT EXISTS user (
      id VARCHAR(20) NOT NULL COMMENT 'ID (PK)',
      password VARCHAR(255) NOT NULL COMMENT '비밀번호',
      name VARCHAR(20) NOT NULL COMMENT '이름',
      insert_time DATETIME NOT NULL DEFAULT NOW() COMMENT '등록일',
      update_time DATETIME NULL COMMENT '수정일',
      PRIMARY KEY (id)
    ) COMMENT '유저'`;

    conn.query(articleTableSQL, error => {
      if (error) throw error;
      console.log("ARTICLE Table Created");
    });

    conn.query(userTableSQL, error => {
      if (error) throw error;
      console.log("USER Table Created");
    });
  }
});

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
