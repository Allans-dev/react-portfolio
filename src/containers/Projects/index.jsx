import React, { Component }from 'react';
import ProjectCard from './ProjectCard';

import projectSites from '../../projectSites';
import projectDes from '../../project-descriptions';

import '../../style/projects-styles.css';


class Projects extends Component { 

  cardTitle = (() => {
    return Object.keys(projectDes);
  })()

  cardDes = (() => {
    return this.cardTitle.map((item) => {
      return projectDes[item];
    });
  })()

  liveSites = (() => {
    return Object.keys(projectSites);
  })()

  gitHubSites = (() => {
    return this.liveSites.map((item) => {
      return projectSites[item];
    });
  })()

  displayCards = (() =>{
    return this.liveSites.map((item, index) => {
      return (
        <ProjectCard 
        key={index} 
        iframeSrc={item} 
        title={this.cardTitle[index]}
        description={this.cardDes[index]}
        site={this.liveSites[index]}
        github={this.gitHubSites[index]}
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