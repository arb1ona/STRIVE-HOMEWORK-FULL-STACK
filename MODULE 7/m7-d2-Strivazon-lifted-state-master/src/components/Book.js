import React from "react";

export default ({ id, title, imageUrl, price, changeBook, bookSelected }) => (
  <li
    onClick={() => changeBook(id)}
    className={bookSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={title}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="book-image" src={imageUrl} alt="book cover" />
      <div>
        <p className="card-title font-weight-bold">{title}</p>
        <p>{price}</p>
      </div>
    </div>
  </li>
);
