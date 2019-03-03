import React, { Component } from 'react';

import '../style/social-styles.scss';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <section className="social">
        <div>Social^^^</div>
      </section>
    );
  }
}

export default Social;
