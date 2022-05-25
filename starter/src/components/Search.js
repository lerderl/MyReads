import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Search = ({ setShowSearchpage, books, updateBook }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (query) => {
    setQuery(query);
  };

  const displayBooks = query === '' ? books : books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))

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
        {query === "" ? (
          <div></div>
        ) : (displayBooks.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                  ></div>
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={e => updateBook(book, e.target.value)}
                    >
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          )
        ))}
      </ol>
    </div>
  </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  setShowSearchpage: PropTypes.func.isRequired,
};

export default Search;
