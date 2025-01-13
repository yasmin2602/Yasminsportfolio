import React from 'react';
import styles from './AboutStyles.module.css';
import aboutImage from '../../assets/about-pic.png';


function About() {
  return (
    <section id="about" className={styles.aboutSection}>
    <p class="section__text__p1">Curious about who I am? Read all</p>
      <h1 className="sectionTitle">About Me</h1>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="About me illustration"
          className={styles.aboutImage}
        />
        <div className={styles.textBox}>
          <div className={styles.textContainer}>
            <p>
              Hi, I'm Yasmin, currently in my final year of my Software Engineering Bachelor's at OsloMet. 
              I'm always eager to connect with others and learn from those with more experience—because 
              knowledge-sharing is the key to growth!
            </p>
            <br />
            <p>
              I'm an ambitious girl with a love for the great outdoors and a passion for baking! Whether 
              it's hiking up mountains or whipping up delicious treats, I enjoy combining creativity and 
              fun in everything I do. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
