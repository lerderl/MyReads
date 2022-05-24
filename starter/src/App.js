import "./App.css";
import { useState } from "react";

import Header from "./components/Header";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <div className="list-books">
        <Header />
      </div>
    </div>
  );
}

export default App;
