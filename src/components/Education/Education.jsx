import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
  
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img src={getImageUrl("about/uta.png")} alt="Cursor icon" />
            <div className={styles.educationItemText}>
              <h3>Master of Science in Computer and Information Sciences</h3>
              <p>
              •	University of Texas at Arlington, Arlington, TX, USA | CGPA: 3.9/4.0  </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("about/au.png")} alt="Cursor icon" />
            <div className={styles.educationItemText}>
              <h3>Bachelor of Technology in Computer Science Engineering</h3>
              <p>
              •	Sagi Rama Krishnam Raju Engineering College, India | CGPA: 8.7/10  </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
