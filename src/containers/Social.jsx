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
        <div className="icon-container">
          <i className="fa fa-linkedin" />
          <i className="fa fa-github" />
          <i className="fa fa-free-code-camp" />
          <i className="fa fa-instagram" />
        </div>
        <div className="social-title">
            Social-Media
        </div>
      </section>
    );
  }
}

export default Social;
