import { useState } from "react";
import styles from "./checkbox.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Checkbox = ({ label }) => {
  const [value, setValue] = useState(false);
  const onChange = (e) => {
    setValue(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <div className={classNames(styles.checkbox, value ? styles.checked : "")}>
      <label className={styles.checkboxLabel}>{label}</label>
      <input
        className={classNames(styles.checkboxInput)}
        name="checkbox"
        value={value}
        onChange={onChange}
        type="checkbox"
      />
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.array,
};
export default Checkbox;
