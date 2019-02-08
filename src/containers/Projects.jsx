import React from 'react';
import Particles from 'react-particles-js';
import ProjectCard from '../components/ProjectCard';
import projectData from '../project-data';
import '../style/projects-styles.css';
import params from '../particle-params';

const cardTitle = () => Object.keys(projectData);

const displayCards = () => cardTitle().map(item => (
  <ProjectCard
    key={item}
    iframeSrc={projectData[item].website}
    title={item}
    description={projectData[item].description}
    site={projectData[item].website}
    github={projectData[item].github}
  />
));

const Projects = () => (
  <section className="projects">
    <Particles className="particles" params={params} />
    <h1>Projects</h1>
    <div className="card-container">
      {displayCards()}
    </div>
  </section>
);
export default Projects;
