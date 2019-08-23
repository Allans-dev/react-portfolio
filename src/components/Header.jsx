import React from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

function LinkEnvCheck() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return <Link to="/" className="header-home-btn header-btn">home</Link>
      } else {
        return <Link to="/react-portfolio" className="header-home-btn header-btn">home</Link>
      }
}

const Header = () => (
  <header>
    {LinkEnvCheck()}
    <nav className="header-nav">
      <Link to="/experience" className="exp-btn header-btn">experience</Link>
      <Link to="/projects" className="projects-btn header-btn">projects</Link>
      <Link to="/social" className="social-btn header-btn">social</Link>
    </nav>
  </header>
);

export default Header;
