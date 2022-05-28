import PropTypes from "prop-types";

const Book = ({ book, updateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf || 'none'} onChange={e => updateBook(book, e.target.value)}>
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
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Book;
