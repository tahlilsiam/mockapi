const addBooks = require("../models/booksInfo");

exports.Books = async (req, res) => {
  try {
    const { title, author, genre, price } = req.body;
    const newBook = new addBooks({ title, author, genre, price });

    await newBook.save();

    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
