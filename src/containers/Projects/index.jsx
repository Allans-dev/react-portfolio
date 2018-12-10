import React, { Component }from 'react';
import ProjectCard from './ProjectCard';
import projectList from '../../projectList';

import '../../style/projects-styles.css';

class Projects extends Component { 
  render(){

    const displayCards = (() =>{
      return projectList.map((item) => {
        return (
          <ProjectCard iframeSrc={item}/>
        );
      });
    })();

    return (
      <section className="projects">
        <h1>Projects</h1>
        {displayCards}
      </section>
    );

  }
  
}

export default Projects;