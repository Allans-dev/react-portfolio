/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

import '../../style/projects-styles.css';

const ProjectCard = (props) => {
  const {
    title,
    iframeSrc,
    description,
    github,
    site,
  } = props;
  console.log(props);

  return (
    <Card className="project-card">
      <CardContent>
        <h2>{title}</h2>
        <div className="card-iframe">
          <CardMedia
            component="iframe"
            alt="iframe for project website"
            src={iframeSrc}
            width="1440px"
            height="500px"
          />
        </div>
        <Typography>
          {description}
        </Typography>
        <CardActions>
          <Button href={github} target="_blank" size="medium">Github</Button>
          <Button href={site} target="_blank" size="medium">Go to site</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
