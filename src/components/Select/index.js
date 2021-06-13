import { FaChevronDown } from "react-icons/fa";
import styles from "./select.module.scss";
function Select({ options, onChange, value }) {
  return (
    <div className={styles.container}>
      <select onChange={onChange} value={value} className={styles.select}>
        {options.map((op) => (
          <option value={op.value}>{op.label}</option>
        ))}
      </select>
      <FaChevronDown className={styles.icon} />
    </div>
  );
}

export default Select;
