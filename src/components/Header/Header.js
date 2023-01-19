import { PropTypes } from "prop-types";

import "./Header.css";
/**
 * Home Page Header Title
 * @param {String} title title of home page
 * @param {String} headerContainerClassName header container class name
 */
const Header = ({ title, headerContainerClassName }) => {
  return (
    <div className={headerContainerClassName}>
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  headerContainerClassName: PropTypes.string,
};

Header.defaultProps = {
  title: "",
  headerContainerClassName: "",
};

export default Header;
