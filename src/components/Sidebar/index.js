import { useState } from "react";
import styles from "./sidebar.module.scss";
import PropTypes from "prop-types";
import NavItem from "../NavItem";
import { useRouter } from "next/router";
import { logout } from "../../api";
const config = [
  {
    label: "All",
    route: "/resources",
  },

  {
    label: "Favourites",
    route: "/resources/liked",
  },
  {
    label: "Trending",
    route: "/resources/trending",
  },
  {
    label: "Recently Added",
    route: "/resources/recent",
  },
];
const Sidebar = () => {
  const router = useRouter();
  const onClick = (label, route) => {
    router.push(route);
  };

  return (
    <div className={styles.sidebar}>
      {config.map(({ label, route }) => (
        <NavItem
          label={label}
          active={router.pathname === route}
          onClick={() => onClick(label, route)}
        />
      ))}
      <NavItem label="Logout" onClick={() => logout()} />
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.array,
};
export default Sidebar;
