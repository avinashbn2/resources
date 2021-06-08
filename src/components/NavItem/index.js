import styles from "./navItem.module.scss";
import PropTypes from "prop-types";
const NavItem = ({ onClick, label }) => {
  return (
    <div className={styles.navItem} onClick={onClick}>
      {label}
    </div>
  );
};

NavItem.propTypes = {
  children: PropTypes.array,
};
export default NavItem;
