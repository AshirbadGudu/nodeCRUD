const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Database
const db_controller = require("./db_controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// OUR Routes

// Create
app.post("/insert", (request, response) => {});
// Read
app.get("/getAll", (request, response) => {
  const db = db_controller.getDBControllerInstance();
  response.json({
    success: true,
  });
});
// Update

// Delete

app.listen(process.env.PORT, () => {
  console.log("running");
});
