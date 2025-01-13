import styles from './ProjectsStyles.module.css';
import chats from '../../assets/chatlogo.png';
import aibot from '../../assets/yassylogo.jpg';
import weather from '../../assets/weatherlogo.png';
import food from '../../assets/restaurant.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Some Projects I have worked on</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chats}
          link="https://github.com/yasmin2602/Sosialmedie-MVC-"
          h3="Photogram"
          p="Social media platform"
        />
        <ProjectCard
          src={aibot}
          link="https://github.com/yasmin2602/Aichatbot"
          h3="Yassybot"
          p="An AI chatbot"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/yasmin2602/Weatherforecast"
          //<a href="https://www.freepik.com/search">Icon by IconMarketPK</a>
          h3="Weather App "
          p="Weather forecast site"
        />
        <ProjectCard
          src={food}
          link="https://github.com/yasmin2602/Restaurant-website-project"
          h3="Restaurant website"
          p="Jasmin restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
