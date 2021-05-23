import styles from "./header.module.scss";
import PropTypes from "prop-types";
const Header = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

Header.propTypes = {
  children: PropTypes.array,
};
export default Header;
