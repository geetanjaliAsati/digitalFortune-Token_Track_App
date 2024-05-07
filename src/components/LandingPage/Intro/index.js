import React from "react";
import styles from "./styles.module.css";
import Button from "../../common/Button/Button"
const LandingIntro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.bigHeading1}>The best Crypto Coin Tracker</div>
        <div className={styles.bigHeading2}>
          Stay Ahead with Real-Time Crypto Insights.
        </div>
        <div className={styles.headingPara}>
          DigitalFortune is the ultimate Crypto tracker. Keep track of all your coins,
          including Bitcoin, Ethereum, Litecoin, and over 10.000 altcoins. Use
          our free app to keep an overview of your portfolio across wallets and
          exchanges, and get the latest prices and market charts in your local
          currency. Then add some cypto coins into wishlist to ensure you don’t miss out on the
          next big cycle.
        </div>
        <div className={styles.headingBtns}>
          <Button text="Dashboard"/>
          <Button text="Share" outlined={true}/>
        </div>

      </div>
      <div className={styles.phone}></div>
    </div>
  );
};

export default LandingIntro;
