import React from 'react';
import Particles from 'react-particles-js';
import { Switch, Route } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './containers/Projects';
import Experience from './components/Experience';
import Social from './containers/Social';

import params from './particle-params';

import './style/App.scss';

// function envCheck() {
//   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     return '/';
//   }
//   return '/react-portfolio/';
// }

const App = () => (
  <div className="App">
    <Header />
    <Particles className="particles" params={params} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={Projects} />
      <Route path="/social" component={Social} />
    </Switch>
  </div>
);
export default App;
