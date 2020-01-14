import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1><ul>
        <a href=""><li>Resume</li></a>
        <a href=""><li>About Me</li></a>
        <a href=""><li>Contact</li></a>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'My Portfolio'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
