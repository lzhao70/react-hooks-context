import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <div className='nav bg-dark text-dark'>
      <nav className='nav-bar nav-container'>
        <h1 className='nav-title'>{title}</h1>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Example',
};

export default NavBar;
