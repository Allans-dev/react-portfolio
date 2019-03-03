import React from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

const Header = () => (
  <header>
    <Link to="/" className="header-home-btn header-btn">home</Link>
    <nav className="header-nav">
      <Link to="/experience" className="exp-btn header-btn">experience</Link>
      <Link to="/projects" className="projects-btn header-btn">projects</Link>
      <Link to="/social" className="social-btn header-btn">social</Link>
    </nav>
  </header>
);

export default Header;
