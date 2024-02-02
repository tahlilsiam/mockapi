const BookInfo = require("../models/booksInfo");

exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, price } = req.body;
    const newBook = new BookInfo({ title, author, genre, price });

    await newBook.save();

    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
