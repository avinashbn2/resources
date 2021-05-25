import PropTypes from "prop-types";

import Card from "../Card";
import Button from "../Button";
import Input from "../Input";
import styles from "./login.module.scss";
import useMutableState from "../../hooks/useMutableState";
import { general, errors as Errors } from "../../utils/locale.json";
import Checkbox from "../Checkbox";
import Link from "../Link";
import { motion } from "framer-motion";
const Login = ({ onClick }) => {
  const [state, setState] = useMutableState({});
  const { password, email } = state;
  const onChange = (e, type) => {
    setState({ [type]: e.target.value });
  };

  return (
    <Card>
      <motion.div
        width="100%"
        height="100%"
        key="login"
        initial={{ opacity: 0, y: 0, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ bounce: 0, ease: "easeInOut" }}
        className={styles.login}
      >
        <h2>Let's get started!</h2>
        <Input
          label={general.email}
          placeholder={general.email}
          value={email}
          type="email"
          onChange={(e) => onChange(e, "email")}
        />
        <Input
          label={general.password}
          placeholder={general.password}
          value={password}
          type="password"
          onChange={(e) => onChange(e, "password")}
        />
        <Checkbox
          label={
            <p>
              I agree to <b className={styles.bold}>Terms of service</b>{" "}
              and&nbsp;
              <b className={styles.bold}>Privacy Policy</b>.
            </p>
          }
        />
        <Button title={general.login} onClick={onClick} variant="Primary" />
        <div className={styles.loginMsg}>
          Don't have an account yet? &nbsp;
          <Link onClick={onClick} title={general.signup} />
        </div>
      </motion.div>
    </Card>
  );
};

Login.propTypes = {
  children: PropTypes.array,
};
export default Login;
