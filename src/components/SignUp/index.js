import PropTypes from "prop-types";
import Card from "../Card";
import Button from "../Button";
import Input from "../Input";
import styles from "./signup.module.scss";
import useMutableState from "../../hooks/useMutableState";
import { general, errors as Errors } from "../../utils/locale.json";
import { motion } from "framer-motion";
import Checkbox from "../Checkbox";
const Signup = () => {
  const [state, setState] = useMutableState({});
  const { password, cnfPassword, fName, lName, email } = state;
  console.log(state);
  const onChange = (e, type) => {
    setState({ [type]: e.target.value });

    validate();
  };

  const validate = () => {
    const errors = {};

    if (fName === "") {
      errors.fName = Errors.required;
    } else {
      errors.fName = false;
    }
    if (email === "") {
      errors.fName = Errors.required;
    } else {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const res = re.test(String(email).toLowerCase());
      if (!res) {
        errors.email = Errors.email;
      } else {
        errors.email = false;
      }
    }
    if (password === "") {
      errors.password = Errors.required;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className={styles.signup}>
        <h2>Let's get started!</h2>
        <div className={styles.signupRow}>
          <Input
            label={general.fName}
            placeholder={general.fName}
            value={fName}
            type="text"
            onChange={(e) => onChange(e, "fName")}
          />
          <Input
            label={general.lName}
            placeholder={general.lName}
            value={lName}
            type="text"
            onChange={(e) => onChange(e, "lName")}
          />
        </div>
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
        <Input
          label={general.cnfPassword}
          placeholder={general.cnfPassword}
          value={cnfPassword}
          type="password"
          onChange={(e) => onChange(e, "cnfPassword")}
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
        <Button title={general.signup} variant="Primary" />
      </Card>
    </motion.div>
  );
};

Signup.propTypes = {
  children: PropTypes.array,
};
export default Signup;
