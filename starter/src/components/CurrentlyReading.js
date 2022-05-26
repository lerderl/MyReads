import BookList from "./BookList";
import PropTypes from "prop-types";

const CurrentlyReading = ({ books, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === 'currentlyReading')
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

CurrentlyReading.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func
};

export default CurrentlyReading;
