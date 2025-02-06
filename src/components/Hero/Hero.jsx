import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manojna</h1>
        <p className={styles.description}>
        I am a recent graduate from the University of Texas at Arlington with a Master's in Computer Science, specializing in Artificial Intelligence and Databases. With 2 years of experience at Infosys, I've honed my skills in software development. I'm now seeking roles in front-end development, full-stack development, and AI. Let's connect!
        </p>
        <a href="mailto:saimanojnatetali@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
       
    </section>
  );
};
