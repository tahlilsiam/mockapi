const mongoose = require("mongoose");

const bookInfoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value for id.",
    },
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BookInfo = mongoose.model("BookInfo", bookInfoSchema);

module.exports = BookInfo;
