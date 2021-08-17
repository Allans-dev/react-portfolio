import React from 'react';

import '../style/home-styles.scss';

const Home = () => (
  <article className="home">
    <h1 className="title">Welcome to code.allan</h1>
    <section className="icon-container">
      <div>
        <a href="https://www.linkedin.com/in/allan-cheung-web/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
        <a href="https://github.com/Allans-dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
        <a href="https://www.freecodecamp.org/allans-dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp" /></a>
        <a href="https://www.instagram.com/_photosbyallan_/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
      </div>
    </section>
  </article>
);

export default Home;
