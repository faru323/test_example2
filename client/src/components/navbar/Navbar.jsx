import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navb}>
      <div className={styles.navb__left}>Notary</div>
      <div  className={styles.navb__right}>
      <ul className={styles.navb_ul}>
      <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/">
      Home
      </Link>
    </li>

    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/areas">
      Practice Areas
      </Link>
    </li>
    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/testimonials">
       Testimonials
      </Link>
    </li>
    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/about">
     About
      </Link>
    </li>
    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/contact">
     Contact
      </Link>
    </li>
      
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
