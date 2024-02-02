const express = require("express");
const addBook = require("../controller/addBook");

const router = express.Router();
router.post("/books", addBook.addBook); // Update this line

module.exports = router;
