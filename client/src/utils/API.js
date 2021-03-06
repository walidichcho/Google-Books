import axios from "axios";


const BaseUrl = "https://restcountries.eu/rest/v2/all"


export default {
  // Gets all books
  getGoogleSearchBooks: function (query) {
    return axios.get(BaseUrl + query);
  },
  // Gets the book save in db
  getBooks: function () {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  }
};
