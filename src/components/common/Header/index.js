import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import SwipeableTemporaryDrawer from "./Drawer";
const Header = () => {
  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.heading}>
          DigitalFortune<span style={{ color: "var(--deep-red-100)" }}>.</span>
        </h1>
        <div className={styles.links}>
          <a href="/">
            <p className={styles.link}>Home</p>
          </a>
          <a href="/compare">
            <p className={styles.link}>Compare</p>
          </a>
          <a href="/dashboard">
            <Button text="dashboard" />
          </a>
        </div>

        <SwipeableTemporaryDrawer />
      </div>
    </>
  );
};

export default Header;
