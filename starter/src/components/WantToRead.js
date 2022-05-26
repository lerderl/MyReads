import BookList from "./BookList";
import PropTypes from "prop-types";

const WantToRead = ({ books, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === 'wantToRead')
            .map(book => (
              <li key={book.id}>
                <BookList book={book} updateBook={updateBook}  />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
};

WantToRead.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default WantToRead;
