import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section2'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section3'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='section4'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
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
