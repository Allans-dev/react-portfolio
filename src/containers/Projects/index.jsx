import React, { Component }from 'react';
import ProjectCard from './ProjectCard';

import projectData from '../../project-data';

import '../../style/projects-styles.css';


class Projects extends Component { 

  cardTitle = (() => {
    return Object.keys(projectData);
  })()

  displayCards = (() =>{
    return this.cardTitle.map((item, index) => {
      return (
        <ProjectCard 
        key={index} 
        iframeSrc={projectData[item].website} 
        title={item}
        description={projectData[item].description}
        site={projectData[item].website}
        github={projectData[item].github}
        />
      );
    });
  })();

  render(){
    return (
      <section className="projects">
        <h1>Projects</h1>
        <div className="card-container">
          {this.displayCards}
        </div>
      </section>
    );

  }
  
}

export default Projects;