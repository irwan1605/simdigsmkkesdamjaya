import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="book-card" onClick={() => navigate(`/book/${book.id}`)}>
      <div className="book-cover" style={{ backgroundImage: `url(${book.cover})` }}></div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;