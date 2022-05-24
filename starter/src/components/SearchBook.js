// import { Link } from 'react-router-dom';

const SearchBook = ({ setShowSearchpage }) => {
  return (
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!setShowSearchpage)}>Add a book</a>
    </div>
  );
};

export default SearchBook;
