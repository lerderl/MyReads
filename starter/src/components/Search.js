import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setShowSearchpage }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        onClick={() => setShowSearchpage(setShowSearchpage)}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={e => updateQuery(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">{console.log(query)}</ol>
    </div>
  </div>
  );
};

Search.propTypes = {
  setShowSearchpage: PropTypes.func.isRequired
};

export default Search;
