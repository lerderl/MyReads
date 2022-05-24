import { useState } from "react";

import "./App.css";
import Read from "./components/Read";
import Header from "./components/Header";
import SearchBook from "./components/SearchBook";
import WantToRead from "./components/WantToRead";
import CurrentlyReading from "./components/CurrentlyReading";
import Search from "./components/Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const updatePage = (showSearchPage) => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search />
      ) : (
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
          )
      }
    </div>
  );
}

export default App;
