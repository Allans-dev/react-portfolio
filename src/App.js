import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Particles from 'react-particles-js';
import params from './particle-params';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Particles className="particles" params={params}/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
