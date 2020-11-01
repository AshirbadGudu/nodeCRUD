const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db " + connection.state);
  }
});
class DBController {
  static getDBControllerInstance() {
    return instance ? instance : new DBController();
  }
  async getAllData() {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DBController;
