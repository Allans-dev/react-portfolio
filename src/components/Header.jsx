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
    <nav className="header-home-btn">
        <Link to={LinkEnvCheck()} className="header-btn">home</Link>
    </nav>
    <nav className="nav-btns">
      <Link to={LinkEnvCheck() + "experience"} className="header-btn">experience</Link>
      <Link to={LinkEnvCheck() + "projects"} className="header-btn">projects</Link>
      <Link to={LinkEnvCheck() + "social"} className="header-btn">social</Link>
    </nav>
  </header>
);

export default Header;
