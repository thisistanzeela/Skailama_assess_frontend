// Header.jsx
import React from 'react';
import './Nav.css';

const Nav = ({projectName}) => {
  return (
    <header className='header'>
      <span className='breadcrumbs'>
        Home Page / {projectName} / Add Your Podcast
      </span>
    </header>
  );
};

export default Nav;
