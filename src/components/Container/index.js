import styles from "./container.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Container = ({ className, children }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
};
export default Container;
