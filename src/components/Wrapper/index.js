import Container from "../Container";
import Sidebar from "../Sidebar";
import styles from "./wrapper.module.scss";
const Wrapper = ({ children }) => {
  return (
    <Container className={styles.resources}>
      <Sidebar />
      {children}
    </Container>
  );
};

export default Wrapper;
