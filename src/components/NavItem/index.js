import styles from "./navItem.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const NavItem = ({ active, onClick, label }) => {
  return (
    <div
      className={classNames(styles.navItem, active ? styles.navItemActive : "")}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

NavItem.propTypes = {
  children: PropTypes.array,
  active: PropTypes.bool,
  label: PropTypes.string,
};
export default NavItem;
