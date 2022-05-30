import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const updatedBooks = await BooksAPI.getAll();
    setBooks(updatedBooks);
  };

  const updateQuery = (query) => {
    setQuery(query);
    BooksAPI
      .search(query, 30)
      .then(res => {
        let filteredBooks = [];

        if (Array.isArray(res)) {
          // console.log(books.map(book => book.shelf));
          // console.log(res.shelf);
          // console.log(res);
          filteredBooks = books.map(book => {
            if (!book.shelf) {
              res.filter();
            };
          });
          setDisplayBooks(res.filter(r => r.authors !== undefined && r.imageLinks !== undefined));
        } else {
          setDisplayBooks([]);
        };
      })
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={
          <Search updateBook={updateBook} query={query} updateQuery={updateQuery} displayBooks={displayBooks} />
        } />
        <Route path="/" element={
          <Home books={books} updateBook={updateBook} />
        } />
      </Routes>
    </div>
  );
}

export default App;
