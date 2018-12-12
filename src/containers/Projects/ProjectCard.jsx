import React from 'react';

import { Card,
         CardActions,
         CardContent,
         CardMedia,
         Typography,
         Button
       } from '@material-ui/core';

import '../../style/projects-styles.css'

const ProjectCard = (props) => {
  return (
    <Card className="project-card">
      <CardContent>
        <h2>{props.title}</h2>
        <div className="card-iframe">
        <CardMedia
          component="iframe"
          alt="please allow for http(unsecure) sites for this page"
          src={props.iframeSrc}
          width="1440px"
          height="500px"
        />
        </div>
        <Typography>
          {props.description}
        </Typography>
        <CardActions>
          <Button href={props.github} target="_blank" size="medium">Github</Button>
          <Button href={props.site} target="_blank" size="medium">Go to site</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;