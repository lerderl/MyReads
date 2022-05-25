import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

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

  return (
    <div className="app">
      <Routes>
        {showSearchPage ? (
          <Route path="/search" element={
              <Search setShowSearchpage={updatePage} books={books} updateBook={updateBook} />
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
