import React from 'react';

import '../../App.css';

const Section = ({ id, title, subtitle }) => {
  return (
    <div className=''>
      <div className='section-content' id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
