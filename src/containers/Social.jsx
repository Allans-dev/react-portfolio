import React, { Component } from 'react';

import '../style/social-styles.css';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <section className="social">
        Social ^^^
      </section>
    );
  }
}

export default Social;
