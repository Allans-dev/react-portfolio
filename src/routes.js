import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Social from './components/Social';

const Routes = (props) => (
  <Router {...props}>
    
    <Route path="/" component={App}>
      <Route path="/experience" component={Experience}/>
      <Route path="/projects" component= {Projects}/>
      <Route path="/social" component= {Social}/>
    </Route>
  </Router>
);

export default Routes;