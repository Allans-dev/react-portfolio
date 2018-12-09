import React from 'react';
import { Link } from 'react-router-dom'

import '../style/header-styles.css';

const Header = () => {
  return (
    <section className='header'>
      <nav className='header-nav'>
        <Link to={`/experience`} className='exp-btn header-btn'>experience</Link>
        <Link to={`/projects`} className='projects-btn header-btn'>projects</Link>
        <Link to={`/social`} className='social-btn header-btn'>social</Link>
      </nav>
    </section>
  );
};

export default Header;