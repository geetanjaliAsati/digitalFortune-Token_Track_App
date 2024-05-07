import React from 'react'
import styles from "./styles.module.css";
const index = ({text, onClick}) => {
  return (
    <div className={styles.btnDiv} onClick={() => onClick()}>{text}</div>
  )
}

export default index