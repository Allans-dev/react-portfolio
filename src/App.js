import React, { Component } from 'react';

import Header from './src/Header';
import LandingPage from './src/LandingPage';
import Skills from './src/Skills';
import History from './src/History';
import Projects from '/src/Projects';
import AboutMe from './src/AboutMe';
import Timeline from './src/Timeline';
import ContactUs from './src/ContactUs';
import Footer from './src/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
        <Skills/>
        <History/>
        <Projects/>
        <AboutMe/>
        <Timeline/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
