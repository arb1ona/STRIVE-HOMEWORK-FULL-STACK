import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.books.find(
          (book) => book.id === this.props.bookSelected
        ),
      });
    }
  }

  render() {
    return this.state.book ? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
            <h1>{this.state.book.title}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="book-cover"
              src={this.state.book.imageUrl}
              alt="book selected"
            />
          </div>
          <div className="col-sm-7">
            <p>
              <span className="font-weight-bold">Description:</span>{" "}
              {this.state.book.description}
            </p>
            <p>
              <span className="font-weight-bold">Price:</span>{" "}
              {this.state.book.price}
            </p>
            <Button
              color="primary"
              onClick={() => this.props.addToCart(this.state.book.id)}
            >
              BUY
            </Button>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12">
            <h3>Please select a book!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
