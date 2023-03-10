import { PropTypes } from "prop-types";

import Book from "./../Book/Book";

import "./BooksGrid.css";

/**
 * Books Grid component to show all books
 * @param {Array} books
 */
const BooksGrid = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  );
};

BooksGrid.propTypes = {
  books: PropTypes.array,
};

BooksGrid.defaultProps = {
  books: [],
};

export default BooksGrid;
