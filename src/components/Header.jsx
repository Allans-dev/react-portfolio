import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/header-styles.scss';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  

  LinkEnvCheck() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "/";
      } else {
        return "/react-portfolio/";
      }
}

  // showMenu(){
  //   const showMenu = this.state;
  //   console.log(showMenu);
  //   return showMenu ? "menu-container" : "menu-container change";
    
  // }

  toggleMenu(event){
    const showMenu = this.state;
    event.preventDefault();
    if(showMenu === false){
      console.log(showMenu);
      document.getElementById("menu-container").classList.toggle("active");
      this.setState({ showMenu: true });
    }
    else if (showMenu) {
      console.log("wrong state");
      document.getElementById("menu-container").classList.toggle("active");
      this.setState({ showMenu: false });
    }
  }

  render(){
    return (
      <header>
        <nav className="header-home-btn">
            <Link to={this.LinkEnvCheck()} className="header-btn">home</Link>
        </nav>
        <nav className="nav-btns">
          <Link to={this.LinkEnvCheck() + "experience"} className="header-btn">experience</Link>
          <Link to={this.LinkEnvCheck() + "projects"} className="header-btn">projects</Link>
          <Link to={this.LinkEnvCheck() + "social"} className="header-btn">social</Link>
        </nav>
        <div id="menu-container" onClick={this.toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div> 
      </header>
    );
  }
};
  

export default Header;
