import React, { Component } from "react";
import { books } from "../data/books";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.setState({
      cart:
        this.props.cart &&
        this.props.cart.map((bookId) =>
          books.find((book) => book.id === bookId)
        ),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({
        cart: this.props.cart.map((bookId) =>
          books.find((book) => book.id === bookId)
        ),
      });
    }
  }

  render() {
    return (
      <div className="row">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {this.state.cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => this.props.removeFromCart(book.id)}
              >
                <FontAwesomeIcon icon={faTrash} id="trashIcon" />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
        <div className="row">
          <div className="col-sm-12 font-weight-bold">
            TOTAL:{" "}
            {this.state.cart.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
