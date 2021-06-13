import styles from "./link.module.scss";
import PropTypes from "prop-types";
const Link = ({ onClick, title, to, children, newTab }) => {
  const onClickLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };
  return (
    <a
      className={title ? styles.link : styles.noLink}
      onClick={onClick ? onClickLink : undefined}
      href={to}
      target={newTab ? "_blank" : undefined}
    >
      {title ? title : children}
    </a>
  );
};

Link.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
};
export default Link;
