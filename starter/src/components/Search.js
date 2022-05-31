import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';

import Book from "./Book";

const Search = ({ displayBooks, updateBook, query, updateQuery }) => {
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link
        to={"/"}
        className="close-search"
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          minLength={3}
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={e => updateQuery(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {query === "" ? (
          <div></div>
        ) : (displayBooks.map(book => (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          )
        ))}
      </ol>
    </div>
  </div>
  );
};

Search.propTypes = {
  displayBooks: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  updateBook: PropTypes.func,
  updateQuery: PropTypes.func.isRequired,
};

export default Search;
