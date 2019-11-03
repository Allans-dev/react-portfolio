import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

function hideOnClickOutside(element) {
  const isVisible = (elem) => !!elem && !!(elem.offsetWidth
  || elem.offsetHeight || elem.getClientRects().length);

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
  };

  const outsideClickListener = (event) => {
    if (!element.contains(event.target) && isVisible(element)) {
      document.getElementById('mobile-menu').classList.remove('active');
      document.getElementById('menu-container').classList.remove('change');
      removeClickListener();
    }
  };

  document.addEventListener('click', outsideClickListener);
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();

    const { showMenu } = this.state;

    const mobile = document.getElementById('menu-container');
    hideOnClickOutside(mobile);

    if (!showMenu) {
      document.getElementById('menu-container').classList.toggle('change');
      document.getElementById('mobile-menu').classList.toggle('active');
      this.setState({ showMenu: true });
    } else if (showMenu) {
      document.getElementById('menu-container').classList.toggle('change');
      document.getElementById('mobile-menu').classList.toggle('active');
      this.setState({ showMenu: false });
    }
  }

  render() {
    return (
      <header>
        <nav className="header-home-btn">
          <Link to="/" className="header-btn">HOME</Link>
        </nav>
        <nav className="nav-btns">
          <Link to="/experience" className="header-btn">EXPERIENCE</Link>
          <Link to="/projects" className="header-btn">PROJECTS</Link>
        </nav>
        <div id="menu-container" onClick={this.toggleMenu}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <nav id="mobile-menu">
          <ul>
            <li><Link to="/experience" className="mobile-header-btn">EXPERIENCE</Link></li>
            <li><Link to="/projects" className="mobile-header-btn">PROJECTS</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
