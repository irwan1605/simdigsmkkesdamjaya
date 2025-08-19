import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import books from "../utils/data";
import "../App.css";

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <div>Buku tidak ditemukan</div>;

  return (
    <div className="auth-page">
      <div className="book-detail">
        <img src={book.cover} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <p><strong>Penulis:</strong> {book.author}</p>
          <p><strong>Kategori:</strong> {book.category}</p>
          <p>{book.description}</p>
          <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;