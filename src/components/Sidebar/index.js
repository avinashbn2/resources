import styles from "./sidebar.module.scss";
import PropTypes from "prop-types";
import NavItem from "../NavItem";
const config = [
  {
    label: "Favourites",
    onClick: () => {
      console.log("fav");
    },
  },
  {
    label: "Most Popular",
    onClick: () => {
      console.log("fav");
    },
  },
  {
    label: "Recently Added",
    onClick: () => {
      console.log("fav");
    },
  },
  {
    label: "Tags",
    onClick: () => {
      console.log("fav");
    },
  },
];
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {config.map(({ label, onClick }) => (
        <NavItem label={label} onClick={onClick} />
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.array,
};
export default Sidebar;
