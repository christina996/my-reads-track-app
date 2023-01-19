import { PropTypes } from 'prop-types';

import BooksGrid from "../BooksGrid/BooksGrid";

import "./Bookshelf.css";

/**
 * Home Page Header Title
 * @param {String} title bookshelf section title
 * @param {Array} books my reads in this shelf section
 */
const Bookshelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
};

Bookshelf.defaultProps = {
  title: "",
  books: [],
};

export default Bookshelf;
