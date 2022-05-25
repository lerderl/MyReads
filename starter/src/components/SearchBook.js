import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const SearchBook = ({ setShowSearchpage }) => {
  return (
    <div className="open-search">
      <Link to={"/search"} onClick={() => setShowSearchpage(!setShowSearchpage)}>Add a book</Link>
    </div>
  );
};

SearchBook.propTypes = {
  setShowSearchpage: PropTypes.func.isRequired
};

export default SearchBook;
