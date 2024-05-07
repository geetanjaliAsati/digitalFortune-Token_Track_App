import React from "react";
import styles from "./styles.module.css";
const index = ({ text, onClick, outlined }) => {
  return (
    <div
      className={outlined ? styles.OutlinedButtonDiv : styles.btnDiv}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
};

export default index;
