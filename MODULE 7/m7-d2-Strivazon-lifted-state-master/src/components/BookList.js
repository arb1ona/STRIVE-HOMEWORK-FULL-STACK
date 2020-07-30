import React from "react";
import Book from "./Book";

export default ({ books, changeBook, bookSelected }) => (
  <ul className="col-sm-4">
    {books.map((book, index) => (
      <Book
        {...book}
        key={index}
        changeBook={changeBook}
        bookSelected={bookSelected}
      />
    ))}
  </ul>
);
