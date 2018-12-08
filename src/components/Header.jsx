import React from 'react';
import '../style/header-styles.css';

const Header = () => {
  return (
    <section className='header'>
      <nav className='header-nav'>
        <button className='exp-btn header-btn'>experience</button>
        <button className='projects-btn header-btn'>projects</button>
        <button className='social-btn header-btn'>social</button>
      </nav>
    </section>
  );
};

export default Header;