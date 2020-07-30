import React, { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { books } from "../data/books";

class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSelected: null,
    };
  }

  changeBook = (id) => this.setState({ bookSelected: id });

  render() {
    return (
      <div className="row">
        <BookList
          bookSelected={this.state.bookSelected}
          changeBook={this.changeBook}
          books={books}
        />
        <BookDetail
          bookSelected={this.state.bookSelected}
          books={books}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}

export default BookStore;
