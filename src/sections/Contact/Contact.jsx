import styles from './ContactStyles.module.css';
import emailLightIcon from '../../assets/email-light.svg';
import emailDarkIcon from '../../assets/email-dark.svg';
import linkedinLightIcon from '../../assets/linkedin-light.svg';
import linkedinDarkIcon from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();

  const emailIcon = theme === 'light' ? emailLightIcon : emailDarkIcon;
  const linkedinIcon = theme === 'light' ? linkedinLightIcon : linkedinDarkIcon;

  return (
    <section id="contact" className={styles.container}>
      <p class="section__text__p1">Where can you reach me </p>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactBox}>
        <div className={styles.contactItem}>
          <img src={emailIcon} alt="Email icon" className={styles.icon} />
          <p>
            <a href="mailto:yasminali@live.no" className={styles.link}>
              yasminali@live.no
            </a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <img src={linkedinIcon} alt="LinkedIn icon" className={styles.icon} />
          <p>
            <a
              href="https://linkedin.com/in/yasmin-ali-6b91672b8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
