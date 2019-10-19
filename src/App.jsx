import React from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Main from './components/Main';


import params from './particle-params';

import './style/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Particles className="particles" params={params} />
    <Main />
  </div>
);
export default App;
