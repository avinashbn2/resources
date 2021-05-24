import styles from "./input.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div
      className={classNames(
        styles.input,
        value && value !== "" ? styles.animation : ""
      )}
    >
      <input
        className={classNames(
          styles.inputInput,
          value && value !== "" ? styles.inputInputValid : ""
        )}
        name="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

Input.propTypes = {
  children: PropTypes.array,
};
export default Input;
