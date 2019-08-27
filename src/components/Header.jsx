import React from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

function LinkEnvCheck() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "/";
      } else {
        return "/react-portfolio/";
      }
}

const Header = () => (
  <header>
    <Link to={LinkEnvCheck()} className="header-home-btn header-btn">home</Link>
    <nav className="header-nav">
      <Link to={LinkEnvCheck() + "experience"} className="exp-btn header-btn">experience</Link>
      <Link to={LinkEnvCheck() + "projects"} className="projects-btn header-btn">projects</Link>
      <Link to={LinkEnvCheck() + "social"} className="social-btn header-btn">social</Link>
    </nav>
  </header>
);

export default Header;
