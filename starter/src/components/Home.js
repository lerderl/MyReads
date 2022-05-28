import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Header from "./Header";
import BookShelf from "./BookShelf";

const Home = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <BookShelf books={books} updateBook={updateBook} />
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func,
};

export default Home;
