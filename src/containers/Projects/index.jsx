import React from 'react';
import Particles from 'react-particles-js';
import ProjectCard from './ProjectCard';
import projectData from '../../project-data';
import '../../style/projects-styles.css';
import params from '../../particle-params';

const cardTitle = () => Object.keys(projectData);

const Projects = () => (
  <section className="projects">
    <Particles className="particles" params={params} />
    <h1>Projects</h1>
    <div className="card-container">
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
    </div>
  </section>
);
export default Projects;
