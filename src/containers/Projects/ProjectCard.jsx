import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProjectCard = (props) => {
  return (
    <Card>
      <CardContent>
        
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