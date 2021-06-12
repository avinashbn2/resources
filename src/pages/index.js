import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";
import styles from "../styles/index.module.scss";
import Signup from "../components/SignUp";
import Login from "../components/Login";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  delay: 0.1,
};

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
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
          <AnimatePresence>
            {!showLogin ? (
              <Signup onClick={() => setShowLogin(true)} />
            ) : (
              <Login onClick={() => setShowLogin(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
}
