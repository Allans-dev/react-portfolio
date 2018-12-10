import React, { Component }from 'react';
import ProjectCard from './ProjectCard';

import projectList from '../../projectList';
import projectDes from '../../project-descriptions';

import '../../style/projects-styles.css';


class Projects extends Component { 
  render(){

    const cardTitle = () => {
      return Object.keys(projectDes);
    }

    const cardDes = () => {
      return cardTitle().map((item) => {
        return projectDes[item];
      });
    }

    const displayCards = (() =>{
      return projectList.map((item, index) => {
        return (
          <ProjectCard 
          key={index} 
          iframeSrc={item} 
          title={cardTitle()[index]}
          description={cardDes()[index]}
          />
        );
      });
    })();

    return (
      <section className="projects">
        <h1>Projects</h1>
        <div className="card-container">
          {displayCards}
        </div>
      </section>
    );

  }
  
}

export default Projects;