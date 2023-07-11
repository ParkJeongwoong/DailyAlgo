const getUser = "SELECT * FROM user WHERE id = ?";
const insertUser = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";

const userQuery = {
  getUser,
  insertUser,
};
export default userQuery;
