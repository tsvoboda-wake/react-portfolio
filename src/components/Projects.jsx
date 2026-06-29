import macon from '../assets/macon.png';
import onwego from '../assets/onwego.png';
import weather from '../assets/weather.png';

function ProjectCard({
  title,
  imgName,
  description,
  technologies,
  projectLink
}) {
  return (
    <article className='project-card'>
      <h3>{title}</h3>
      <img src={`./assets/${imgName}.png`} alt={`${title} screenshot`} />
      <p>{description}</p>
      <p>
        <strong>Technologies:</strong> {technologies}
      </p>
      <a href={projectLink} target='_blank' rel='noopener noreferrer'>
        View Project
      </a>
    </article>
  );
}

export function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <ProjectCard
        title='Macon County Site Redesign'
        description='A higher-fidelity template for a website redesign, focusing on responsiveness, accessibility,
          simplified navigation, and a modernized layout for a goverment site.'
        technologies='HTML, CSS, Bootstrap'
        link='https://wcet.waketech.edu/tfsvoboda/WEB210/Final-MaconCounty/'
        imgName='macon'
      />
      <ProjectCard
        title='Onwego Figma App Prototype'
        description='A mobile app prototype created with Figma.'
        technologies='Figma'
        link='https://www.figma.com/proto/28h8qArVWktAHufWv8WlCt/onwego?node-id=1-50&starting-point-node-id=1%3A50&t=ZaFG4QVCFSO021yI-1'
        imgName='onwego'
      />
      <ProjectCard
        title='Weather App'
        description='A simple weather application that searches location data and displays current conditions or a 3-day forecast.'
        technologies='Vue, Vite, TailWindCSS, Weather API'
        link='https://tsvoboda-wake.github.io/final-weather-app/'
        imgName='weather-app'
      />
    </section>
  );
}
