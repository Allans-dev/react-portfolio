import React, { Component } from 'react';

import Header from './components/Header';
// import LandingPage from './components/LandingPage';
// import Skills from './components/Skills';
// import History from './components/History';
// import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
// import Timeline from './components/Timeline';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <LandingPage/>
        <Skills/>
        <History/>
        <Projects/>
        <AboutMe/>
        <Timeline/>
        <ContactUs/>
        <Footer/> */}
      </div>
    );
  }
}

export default App;
