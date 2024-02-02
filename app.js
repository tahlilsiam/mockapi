require("./database");
const express = require("express");
const dotenv = require("dotenv");
const postRoute = require("./router/post");

dotenv.config();

const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", postRoute);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});
