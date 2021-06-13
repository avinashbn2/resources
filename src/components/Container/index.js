import styles from "./container.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Container = ({ className, children, fullWidth }) => {
  return (
    <div
      className={classNames(
        styles.container,
        className,
        fullWidth ? styles.containerFullWidth : ""
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
};
export default Container;
