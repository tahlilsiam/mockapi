require("./database");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});
