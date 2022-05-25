import PropTypes from "prop-types";

import Read from "./Read";
import Header from "./Header";
import SearchBook from "./SearchBook";
import WantToRead from "./WantToRead";
import CurrentlyReading from "./CurrentlyReading";

const Home = ({ setShowSearchpage }) => {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <WantToRead />
          <CurrentlyReading />
          <Read />
        </div>
      </div>
      <SearchBook setShowSearchpage={setShowSearchpage} />
    </div>
  );
};

Home.propTypes = {
  setShowSearchpage: PropTypes.func.isRequired
};

export default Home;
