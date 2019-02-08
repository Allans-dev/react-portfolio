import React, { Component } from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

import '../style/projects-styles.css';

class ProjectCard extends Component {
  render() {
    return (
      <Card className="project-card">
        <CardContent>
          <h2>{this.title}</h2>
          <div className="card-iframe">
            <CardMedia
              component="iframe"
              alt="iframe for project website"
              src={this.iframeSrc}
              width="1440px"
              height="500px"
            />
          </div>
          <Typography>
            {this.description}
          </Typography>
          <CardActions>
            <Button href={this.github} target="_blank" size="medium">Github</Button>
            <Button href={this.site} target="_blank" size="medium">Go to site</Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default ProjectCard;
