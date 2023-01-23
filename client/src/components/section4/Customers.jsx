import React from "react";
import styles from "./customers.module.scss";

const Customers = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Happy Customers</h1>

        <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
