import styles from "./input.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Input = ({ label, placeholder, value, onChange, type }) => {
  return (
    <div className={styles.input}>
      {/*



      <label className={styles.inputLabel} htmlFor="input">
        {label}

      </label>
        */}
      <input
        className={classNames(styles.inputInput, value !== "" ? "focused" : "")}
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
