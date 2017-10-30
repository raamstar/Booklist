const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number
  });

  const Books= mongoose.model('Books', booksSchema);
  module.exports = Books;
