import React from 'react';
import Particles from 'react-particles-js';
import ProjectCard from './ProjectCard';
import projectData from '../../project-data';
import '../../style/projects-styles.scss';
import params from '../../particle-params';

const cardTitle = () => Object.keys(projectData);

const Projects = () => (
  <article className="projects">
    <Particles className="particles" params={params} />
    <section className="card-container">
      {cardTitle().map(item => (
        <ProjectCard
          key={item}
          iframeSrc={projectData[item].website}
          title={item}
          description={projectData[item].description}
          site={projectData[item].website}
          github={projectData[item].github}
        />
      ))}
    </section>
  </article>
);
export default Projects;
