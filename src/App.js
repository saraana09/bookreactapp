import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Favorites from "./Components/Favorites";
import Books from "./Components/Books";
import Home from "./Components/Home";

function App() {
  const [books, setBooks] = useState({});
  const navigate = useNavigate();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${process.env.REACT_APP_API_KEY}&maxResults=5`;

  const handleChange = (event) => {
    const book = event.target.value;
    setBooks(book);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(url);
      setBooks(response.data);
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(books);
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home handleSubmit={handleSubmit} handleChange={handleChange} />
          }
        ></Route>
        <Route path="/books" element={<Books books={books} />}></Route>
        <Route path="/favorites" element={<Favorites books={books} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
