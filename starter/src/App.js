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

  return (
    <div className="app">
      <Routes>
        {showSearchPage ? (
          <Route path="/search" element={
              <Search setShowSearchpage={updatePage} books={books} />
            } />
          ) : (
            <Route path="/" element={
              <Home setShowSearchpage={updatePage} />
            } />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
