import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../../style/projects-styles.css'

const ProjectCard = (props) => {
  return (
    <Card className="project-card">
      <CardContent>
        <CardMedia 
          component="iframe"
          src={props.iframeSrc}
          hieght="140"
          width="100"
        />
        <Typography>
          A brief description.
        </Typography>
        <CardActions>
          <Button size="small">Go to site</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;