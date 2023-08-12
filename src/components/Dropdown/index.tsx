import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeDotsIcon from "../Icons/ThreeDots";

interface Props {
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ThreeDotsIcon />
      <div className={styles.dropdown}>{children}</div>
    </div>
  );
};

export default Dropdown;
