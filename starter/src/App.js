// import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import SearchBook from "./components/SearchBook";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div className="list-books">
        <Header />
        <SearchBook />
      </div>
    </div>
  );
}

export default App;
