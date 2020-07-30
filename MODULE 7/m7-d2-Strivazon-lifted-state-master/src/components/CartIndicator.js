import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

class CartIndicator extends Component {
  render() {
    return (
      <>
        <div className="cart mt-2">
          <>
            <div style={{ marginLeft: "auto" }}>
              <Router>
                <Button
                  color="primary"
                  onClick={() => this.props.history.push("/cart")}
                >
                  <FontAwesomeIcon icon={faShoppingCart} id="cartIcon" />
                  <span className="ml-2">{this.props.cartItemsNum}</span>
                </Button>
              </Router>
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withRouter(CartIndicator);
