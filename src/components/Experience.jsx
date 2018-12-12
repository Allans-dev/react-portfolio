import React, { Component } from 'react';

import Modal from './Modal';

import '../style/experience-styles.css';

class Experience extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <section className="experience">
        Experience Page %% <br/>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open Modal
        </button>
      </section>
    );
  }
}

export default Experience;