import styles from "./container.module.scss";
import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array,
};
export default Container;
