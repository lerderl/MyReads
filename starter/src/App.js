import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const updatePage = (showSearchPage) => {
    setShowSearchpage(!showSearchPage);
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    setBooks(books.filter(b => b.id !== book.id).concat(...book, shelf));
  };

  const updateQuery = (query, maxResults) => {
    setQuery(query);
    BooksAPI
      .search(query, maxResults)
      .then(res => {
        if (Array.isArray(res)) {
          setBooks(res.filter(r => r.authors !== undefined && r.imageLinks !== undefined));
        } else {
          setBooks([]);
        }
      })
  };

  return (
    <div className="app">
      <Routes>
        {showSearchPage ? (
          <Route path="/search" element={
              <Search setShowSearchpage={updatePage} books={books} updateBook={updateBook} query={query} updateQuery={updateQuery} />
            } />
          ) : (
            <Route path="/" element={
              <Home setShowSearchpage={updatePage} books={books} updateBook={updateBook} />
            } />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
