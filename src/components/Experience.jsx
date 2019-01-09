import React, { Component } from 'react';

import Modal from './Modal';

import { 
  Button 
} from '@material-ui/core';


import '../style/experience-styles.css';

class Experience extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
  }
  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <section className="experience">
        <div className="table-container">
          <div className="cell exp"></div>
          <div className="cell extra"></div>
          <div className="cell org"></div>
          <div className="cell fun">
            <Button type="button" onClick={this.showModal}>
              Open
            </Button>
          </div> 
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}/> 
      </section>
    );
  }
}

export default Experience;