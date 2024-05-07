import React from "react";
import styles from "./styles.module.css";
import Button from "../../common/Button/Button";
import { motion } from "framer-motion";

const LandingIntro = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <motion.h1
            className={styles.bigHeading1}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            The best Crypto Coin Tracker
          </motion.h1>
          <motion.h1
            className={styles.bigHeading2}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Stay Ahead with Real-Time Crypto Insights.
          </motion.h1>
          <motion.p
            className={styles.headingPara}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            DigitalFortune is the ultimate Crypto tracker. Keep track of all
            your coins, including Bitcoin, Ethereum, Litecoin, and over 10.000
            altcoins. Use our free app to keep an overview of your portfolio
            across wallets and exchanges, and get the latest prices and market
            charts in your local currency. Then add some cypto coins into
            wishlist to ensure you don’t miss out on the next big cycle.
          </motion.p>
          <motion.div
            className={styles.headingBtns}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}

          >
            <Button text="Dashboard" />
            <Button text="Share" outlined={true} />
          </motion.div>
        </div>
        <div className={styles.phone}></div>
      </div>
    </>
  );
};

export default LandingIntro;
