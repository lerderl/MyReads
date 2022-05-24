// import { useState } from "react";

import "./App.css";
import Read from "./components/Read";
import Header from "./components/Header";
import SearchBook from "./components/SearchBook";
import WantToRead from "./components/WantToRead";
import CurrentlyReading from "./components/CurrentlyReading";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <WantToRead />
            <CurrentlyReading />
            <Read />
          </div>
        </div>
        <SearchBook />
      </div>
    </div>
  );
}

export default App;
