import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ id, title, subtitle }) => {
  return (
    <div className='card text-center'>
      <div className='section-content' id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired
};

export default Section;
