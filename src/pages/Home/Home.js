import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

import { shelfCategory } from "../../constants/booksEnum";
import "./Home.css";

const Home = () => {
  const books = useSelector((state) => Object.values(state.books.data));

  //get books in this shelf
  const getBooksShelf = (books, shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };

  return (
    <div className="list-books">
      <Header title={"MyReads"} headerContainerClassName="list-books-title" />
      <div className="list-books-content">
        <Bookshelf
          title={"Currently Reading"}
          books={getBooksShelf(books, shelfCategory.CURRENT_READING)}
        />
        <Bookshelf
          title={"Want to Read"}
          books={getBooksShelf(books, shelfCategory.WANT_TO_READ)}
        />
        <Bookshelf
          title={"Read"}
          books={getBooksShelf(books, shelfCategory.READ)}
        />
      </div>
      <div className="open-search">
        <Link to={"/search"}>{"Add a book"}</Link>
      </div>
    </div>
  );
};

export default Home;
