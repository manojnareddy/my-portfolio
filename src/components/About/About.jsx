import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon2.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I specialize in React, JavaScript, and UI/UX design, with experience in building responsive and dynamic web applications.   </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon2.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience developing fast and optimized back-end systems and APIs using PHP, Python, and Django. </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon2.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              With expertise in Figma, I have designed landing pages, dashboards, and design systems that enhance usability and accessibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aiIcon2.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Engineer</h3>
              <p>
              I have worked on deep learning and computer vision projects, including Skin Lesion Classification using CNNs and ResNet50. My expertise includes TensorFlow, Keras, and data preprocessing techniques, ensuring efficient model training and deployment for real-world applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
