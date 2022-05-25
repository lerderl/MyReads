import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Search = ({ setShowSearchpage, books }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link
        to={"/"}
        className="close-search"
        onClick={() => setShowSearchpage(setShowSearchpage)}
      >
        Close
      </Link>
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
      <ol className="books-grid">
        {console.log(books)}
        {books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                ></div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
  );
};

Search.propTypes = {
  setShowSearchpage: PropTypes.func.isRequired
};

export default Search;
