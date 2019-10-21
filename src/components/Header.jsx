import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

  function hideOnClickOutside(element) {
    const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    const outsideClickListener = event => {
        if (!element.contains(event.target) && isVisible(element)) {
          document.getElementById("mobile-menu").classList.remove("active");
          document.getElementById('menu-container').classList.remove('change');
          removeClickListener()
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)
    }

    document.addEventListener('click', outsideClickListener)
  }

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    // this.hideOnClickOutside = this.hideOnClickOutside.bind(this);
  }

  state = { showMenu: false };

  // linkEnvCheck() {
  //   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //     return '/';
  //   }
  //   return '/react-portfolio/';
  // }

  toggleMenu(event) {
    event.preventDefault();

    const showMenu = this.state;

    const mobile = document.getElementById('menu-container');
    hideOnClickOutside(mobile);

    if (!showMenu) {
      document.getElementById('menu-container').classList.toggle('change');
      document.getElementById("mobile-menu").classList.toggle("active");
      this.setState({ showMenu: true });
    } else if (showMenu) {
      document.getElementById('menu-container').classList.toggle('change');
      document.getElementById("mobile-menu").classList.toggle("active");
      this.setState({ showMenu: false });
    }

    
  }

  render() {
    return (
      <header>
        <nav className="header-home-btn">
          <Link to="/" className="header-btn">home</Link>
        </nav>
        <nav className="nav-btns">
          <Link to={`/experience`} className="header-btn">experience</Link>
          <Link to={`/projects`} className="header-btn">projects</Link>
          <Link to={`/social`} className="header-btn">social</Link>
        </nav>
        <div id="menu-container" onClick={this.toggleMenu}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <nav id="mobile-menu">
          <ul>
            <li><Link to={`/experience`} className="mobile-header-btn">experience</Link></li>
            <li><Link to={`/projects`} className="mobile-header-btn">projects</Link></li>
            <li><Link to={`/social`} className="mobile-header-btn">social</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
