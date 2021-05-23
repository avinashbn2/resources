import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";
import styles from "../styles/index.module.scss";
import Signup from "../components/SignUp";

export default function Home() {
  return (
    <Container>
      <Header>
        <p className={styles.logo}>LOGO</p>
        <div>
          <Button
            title="Login"
            type="button"
            onClick={() => {}}
            variant="Primary"
          />
        </div>
      </Header>
      <div className={styles.body}>
        <div className={styles.bodySignup}>
          <Signup />
        </div>
      </div>
    </Container>
  );
}
