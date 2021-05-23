import PropTypes from "prop-types";
import Card from "../Card";
import Button from "../Button";
import Input from "../Input";
import styles from "./signup.module.scss";
import useMutableState from "../../hooks/useMutableState";
import { general } from "../../utils/locale.json";
const Signup = () => {
  const [state, setState] = useMutableState({});
  const { name, password, cnfPassword, fName, lName, email } = state;
  const onChange = (e, type) => {
    setState({ [type]: e.target.value });
  };
  return (
    <Card className={styles.signup}>
      <div className={styles.signupRow}>
        <Input
          label={general.fName}
          placeholder={general.fName}
          value={name}
          type="text"
          onChange={(e) => onChange(e, "name")}
        />
        <Input
          label={general.lName}
          placeholder={general.lName}
          value={name}
          type="text"
          onChange={(e) => onChange(e, "name")}
        />
      </div>
      <Input
        label={general.email}
        placeholder={general.email}
        value={email}
        type="text"
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
      <Button title={general.signup} variant="Primary" />
    </Card>
  );
};

Signup.propTypes = {
  children: PropTypes.array,
};
export default Signup;
