const express = require("express");
const addBooks = require("../controller/addBook");

const routes = express.Router();
routes.post("/books", addBooks);
