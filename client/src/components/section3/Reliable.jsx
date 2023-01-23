import React from "react";
import styles from "./reliable.module.scss";

const Reliable = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWMoh9fe3swS7EWWcc7vlIWy9WsB4j_bIvQ&usqp=CAU" alt="lawyer" />
        <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_lb_hComonmedQw765acfopbWCXtSIF0tw&usqp=CAU" alt="lawyer" />
        <div className={styles.text}>
          <p className={styles.title}>
            We Provide Hightly <b>Reliable & Effective</b> Legal Solutions
          </p>

          <p className={styles.lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button}>Book and Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Reliable;
