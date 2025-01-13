import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Welcome</h1>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <nav
        className={`${styles.right} ${isMenuOpen ? styles.showMenu : ''}`}
        onClick={() => setIsMenuOpen(false)} // Lukker menyen når en lenke klikkes
      >
        <a href="#hero" className={styles.link}>
          Intro
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#projects" className={styles.link}>
          Projects
        </a>
        <a href="#skills" className={styles.link}>
          Skills
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
