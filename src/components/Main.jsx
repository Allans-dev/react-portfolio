import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Home';
import Projects from '../containers/Projects';
import Experience from './Experience';
import Social from '../containers/Social';

// function envCheck() {
//   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//         return "/";
//       } else {
//         return "/react-portfolio/";
//       }
// }

const Main = () => (
  <main>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/experience"} component={Experience} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/social"} component={Social} />
    </Switch>
  </main>
);

export default Main;
