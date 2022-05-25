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

export default Home;
