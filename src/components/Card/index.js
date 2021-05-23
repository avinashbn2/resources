import styles from "./card.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Card = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.array,
};
export default Card;
