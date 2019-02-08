import React from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


import params from './particle-params';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Particles className="particles" params={params} />
    <Main />
    <Footer />
  </div>
);
export default App;
