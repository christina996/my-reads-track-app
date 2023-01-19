import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import BooksGrid from "../../components/BooksGrid/BooksGrid";
import InputField from "../../components/common/InputField/InputField";

import { useDebounce } from "../../hooks/useDebounce";
import { search } from "../../utils/BooksAPI";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [showNoDataFound, setShowNoDataFound] = useState(false);

  const navigate = useNavigate();
  const booksObj = useSelector((state) => state.books.data);
  const debounceSearchValue = useDebounce(query, 500);

  useEffect(() => {
    if (debounceSearchValue) {
      search(debounceSearchValue, 30).then((data) => {
        if (data?.error) {
          setBooks([]);
          setShowNoDataFound(true);
        } else {
          const allBooks = data.map((book) => {
            return booksObj[book.id] ? booksObj[book.id] : book;
          });
          setBooks(allBooks);
          setShowNoDataFound(false);
        }
      });
    } else {
      setBooks([]);
      setShowNoDataFound(false);
    }
  }, [debounceSearchValue]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => navigate(-1)}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <InputField
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            handleChangeCallback={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {showNoDataFound ? (
          <div className="search-books-no-results">No Data Found</div>
        ) : (
          <BooksGrid books={books} />
        )}
      </div>
    </div>
  );
};

export default Search;
