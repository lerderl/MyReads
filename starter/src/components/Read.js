import BookList from "./BookList";
import PropTypes from "prop-types";

const Read = ({ books, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === 'read')
            .map(book => (
              <li key={book.id}>
                <BookList book={book} updateBook={updateBook} />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
};

Read.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Read;
