import Header from "../components/Header";
import Container from "../components/Container";
import Button from "../components/Button";
import styles from "../styles/index.module.scss";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  delay: 0.1,
};

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Container fullWidth>
      <Header>
        <p className={styles.logo}>Resources</p>
        <div style={{ display: "none" }}>
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
            <Button
              variant="Primary"
              title="Login With Google"
              onClick={() => {}}
            >
              <FaGoogle />
            </Button>
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
}
