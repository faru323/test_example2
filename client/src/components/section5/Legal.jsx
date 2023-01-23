import React from "react";
import styles from "./legal.module.scss";

const Legal = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div>
          {" "}
          <img
            className={styles.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_lb_hComonmedQw765acfopbWCXtSIF0tw&usqp=CAU"
            alt=""
          />
        </div>
        <div className={styles.legal}>
          <p className={styles.title}>We have Legal Solutions</p>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable
          </p>
        </div>
        <div className={styles.text}>
          <p className={styles.title}>We have Legal Solutions</p>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
