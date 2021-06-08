import styles from "./link.module.scss";
import PropTypes from "prop-types";
const Link = ({ onClick, title, to }) => {
  const onClickLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };
  return (
    <a
      className={styles.link}
      onClick={onClick ? onClickLink : undefined}
      href={to}
      //target="_blank"
    >
      {title}
    </a>
  );
};

Link.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
};
export default Link;
