import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Read from "./components/Read";
import * as BooksAPI from "./BooksAPI";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchBook from "./components/SearchBook";
import WantToRead from "./components/WantToRead";
import CurrentlyReading from "./components/CurrentlyReading";

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
                <div className="list-books">
                  <Header />
                  <div className="list-books-content">
                    <div>
                      <WantToRead />
                      <CurrentlyReading />
                      <Read />
                    </div>
                  </div>
                  <SearchBook setShowSearchpage={updatePage} />
                </div>
              } />
            )
        }
      </Routes>
    </div>
  );
}

export default App;
