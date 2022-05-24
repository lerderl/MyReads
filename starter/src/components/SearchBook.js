// import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const SearchBook = ({ setShowSearchpage }) => {
  return (
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!setShowSearchpage)}>Add a book</a>
    </div>
  );
};

SearchBook.propTypes = {
  setShowSearchpage: PropTypes.func.isRequired
};

export default SearchBook;
