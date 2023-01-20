import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import { updateBookshelf } from "../../redux/features/booksSlice";

import { shelfCategory } from "../../constants/booksEnum";
import bookConfig from "../../configs/books.config.json";
import "./BookshelfChanger.css";

/**
 * Bookshelf changer ddl component
 * @param {Object} book
 */
const BookshelfChanger = ({ book }) => {
  const [bookshelf, setBookshelf] = useState(shelfCategory.NONE);
  const dispatch = useDispatch();

  //set bookshelf value when changed if not found set default value
  useEffect(() => {
    setBookshelf(book.shelf ? book.shelf : shelfCategory.NONE);
  }, [book.shelf]);

  //set bookshelf state and call be to update it
  const handleShelfChanger = (e) => {
    setBookshelf(e.target.value);
    dispatch(updateBookshelf({ book, shelf: e.target.value }));
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleShelfChanger} value={bookshelf}>
        <option value="" disabled>
          Move to...
        </option>
        {bookConfig.shelves.map((shelf) => (
          <option key={shelf.id} value={shelf.shelfName}>
            {shelf.shelfDisplayName}
          </option>
        ))}
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  book: PropTypes.object,
};

BookshelfChanger.defaultProps = {
  book: {},
};

export default BookshelfChanger;
