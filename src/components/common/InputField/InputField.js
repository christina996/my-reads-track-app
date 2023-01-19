import PropTypes from "prop-types";

/**
 * Input Field Common Component
 * @param {string} type Type of the input element
 * @param {string} placeholder The short hint displayed in the input before the user enters a value.
 * @param {string} value The value of the input element.
 * @param {string} handleChangeCallback Callback fired when the value is changed.
 */

const InputField = ({ type, placeholder, value, handleChangeCallback }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChangeCallback}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChangeCallback: PropTypes.func,
};

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  handleChangeCallback: () => {},
};

export default InputField;
