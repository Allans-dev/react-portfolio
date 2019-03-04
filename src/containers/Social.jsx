import React from 'react';

import '../style/social-styles.scss';

const Social = () => (
  <section className="social">
    <div className="icon-container">
      <a href="https://www.linkedin.com/in/allan-cheung-web/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
      <a href="https://github.com/Allans-dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
      <a href="https://www.freecodecamp.org/allans-dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp" /></a>
      <a href="https://www.instagram.com/al_che9/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
    </div>
    <div className="social-title">
        Social-Media
    </div>
  </section>
);

export default Social;
