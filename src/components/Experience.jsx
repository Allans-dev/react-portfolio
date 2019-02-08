import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Modal from './Modal';
import '../style/experience-styles.css';

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
        <div className="table-container">
          <div className="cell exp">
            <h2>Experience</h2>
            <h3>Junior Full Stack Web Developer, BirdBrain</h3>
            <p>Developing in HTML, CSS,JavaScript, ReactJS, PHP and WordPress</p>
          </div>
          <div className="cell edu">
            <h2>Education</h2>
            <ul>
              // eslint-disable-next-line react/no-unescaped-entities
              <li>Free Code Camp's Front End Certificate 2017</li>
              // eslint-disable-next-line react/no-unescaped-entities
              <li>Free Code Camp's Algorthms and Data Structures Certificate</li>
              <li>Bachelors Property Economics, University of Technology Sydney</li>
              <li>International Business, Berlin University of Social Sciences</li>
            </ul>
          </div>
          <div className="cell extra">
            <h2>Extra-Curricular</h2>
            <ul>
              <li>Free Code Camp - Top Contributor 2018 - hosting a study group</li>
              <li>Volunteer helper at Muses Code React Workshop</li>
              <li>Attended technology meetups in 2017</li>
            </ul>
          </div>
          <div className="cell fun">
            <Button type="button" onClick={this.showModal}>
              Open
            </Button>
          </div>
        </div>
        <Modal show={show} handleClose={this.hideModal} />
      </section>
    );
  }
}

export default Experience;
