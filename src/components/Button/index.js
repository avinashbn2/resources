import styles from "./button.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
const Button = ({ title, type = "button", onClick, variant }) => {
  return (
    <button
      onClick={type === "button" ? onClick : undefined}
      type={type}
      className={classNames(
        styles.button,
        variant ? styles[`button${variant}`] : ""
      )}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
export default Button;
