import React from "react";
import styles from "./practice.module.scss";
import { HiOutlineBuildingLibrary} from 'react-icons//hi2';
const PracticeAreas = () => {
  return (
    <div className={`${styles.title}`}>
      <div className={styles.container}>
        <p className={styles.h1}>
          <b>Practice</b> Areas
        </p>
        <p>Lorem ipsum dolor sit amet conasectour adipiscing elit</p>
        <div className={styles.cards}>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4> Bankruptey Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4>Business Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4> Civil Rights Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4> Criminal Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4> Immigration Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div className={styles.card}>
         <HiOutlineBuildingLibrary className={styles.icon}/>
         <h4> Family Law</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
        
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
