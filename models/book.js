const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: [{ type: String, required: true }],
  description: String,
  image: String,
  link: String,
  _id: { type: String }
  // need to add id, MAYBE key?
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
