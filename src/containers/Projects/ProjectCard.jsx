/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';

import '../../style/projects-styles.scss';

const ProjectCard = (props) => {
  const {
    title,
    iframeSrc,
    description,
    github,
    site,
  } = props;

  return (
    <article className="project-card">
      <section>
        <h2>{title}</h2>
        <div className="card-iframe">
          <iframe
            title={title}
            alt="iframe for project website"
            src={iframeSrc}
          />
        </div>
        <p>
          {description}
        </p>
        <div className="project-btns">
          <a href={github} target="_blank" rel="noopener noreferrer" size="medium">Github</a>
          <a href={site} target="_blank" rel="noopener noreferrer" size="medium">Go to site</a>
        </div>
      </section>
    </article>
  );
};

export default ProjectCard;
