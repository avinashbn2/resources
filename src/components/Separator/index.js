/**
 *
 * Separator
 *
 */

import React from "react";
import styles from "./separator.module.scss";
const Separator = ({ text }) => {
  return <div className={styles.separator}>{text}</div>;
};
export default Separator;
