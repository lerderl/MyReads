import PropTypes from "prop-types";

import Read from "./Read";
import Header from "./Header";
import SearchBook from "./SearchBook";
import WantToRead from "./WantToRead";
import CurrentlyReading from "./CurrentlyReading";

const Home = ({ setShowSearchpage, books, updateBook }) => {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <WantToRead books={books} updateBook={updateBook} />
          <CurrentlyReading books={books} updateBook={updateBook} />
          <Read books={books} updateBook={updateBook} />
        </div>
      </div>
      <SearchBook setShowSearchpage={setShowSearchpage} />
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  setShowSearchpage: PropTypes.func.isRequired
};

export default Home;
