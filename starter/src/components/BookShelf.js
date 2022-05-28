import PropTypes from "prop-types";

import Book from "./Book";

const BookShelf = ({ books, updateBook }) => {
  const shelves = [
    { id: "1", shelfName: "wantToRead", shelfDisplayName: "Want To Read"},
    { id: "2", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading"},
    { id: "3", shelfName: "read", shelfDisplayName: "Read"},
  ];

  return (
    <div className="bookshelf">
      {shelves.map(shelf => (
        <div key={shelf.id}>
          <h2 className="bookshelf-title">{shelf.shelfDisplayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === shelf.shelfName)
                .map(book => (
                  <li key={book.id}>
                    <Book book={book} updateBook={updateBook} />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      ))};
    </div>
  );
};

BookShelf.propTypes = {
  updateBook: PropTypes.func,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
