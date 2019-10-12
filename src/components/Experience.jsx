import React, { Component } from 'react';
// import { Button } from '@material-ui/core';
import Modal from './Modal';
import '../style/experience-styles.scss';

import Particles from 'react-particles-js';
import params from '../particle-params';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <section className="experience">
      <Particles className="particles" params={params} />
        <div className="table-container">
          <div className="cell exp">
            <h2>Experience</h2>
            <p>Junior Full Stack Web Developer, BirdBrain 2018 (3 months)</p>
            <p>Developing in HTML, CSS,JavaScript, ReactJS, PHP and WordPress</p>
          </div>
          <div className="cell edu">
            <h2>Programming</h2>
            <ul>
              <li>Certificate IV Programming, TAFE 2019</li>
              {// eslint-disable-next-line react/no-unescaped-entities
                <li>Free Code Camp's Front End Certificate 2017</li>}
              {// eslint-disable-next-line react/no-unescaped-entities
                <li>Free Code Camp's Algorthms and Data Structures Certificate</li>}
            </ul>
          </div>
          <div className="cell extra">
            <h2>Extra-Curricular</h2>
            <ul>
              <li>Free Code Camp - Top Contributor 2018 - hosting a study group</li>
              <li>Volunteer helper at Muses Code React Workshop 2018</li>
              <li>Volunteer at 2019 IoT Impact Conference</li>
            </ul>
          </div>
          <div className="cell back">
            <h2>Property Economics Background</h2>
            <ul>
              <li>Assistant Compliance Officer, Whelan Property Group 2016 </li>
              <li>Resident Assistant, Urbanest 2014</li>
              <li>B. Property Economics, University of Technology Sydney 2016</li>
              <li>International Business, Berlin University of Social Sciences 2015</li>
            </ul>
            {/* <Button type="button" onClick={this.showModal}>
              Open
            </Button> */}
          </div>
        </div>
        <Modal show={show} handleClose={this.hideModal} />
      </section>
    );
  }
}

export default Experience;
