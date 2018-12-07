import React from 'react';
import '../style/header-styles.css';

const Header = () => {
  return (
    <section className='header'>
      <nav className='header-nav'>
        <button className='sign-in-btn'>Sign up</button>
        <button className='log-in-btn'>Log in</button>
      </nav>
    </section>
  );
};

export default Header;