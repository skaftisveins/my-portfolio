import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

const SkillItem = ({
  id,
  skill: { name, level, rating, yearsOfExperience }
}) => {
  return (
    <div id={id} className='card'>
      <h3 className='lead'>{name}</h3>
      <span>Skill level: {level}</span>
      <span>Rating {rating}</span>
      <div></div>
      <small>Years of experience programming: {yearsOfExperience}</small>
    </div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default SkillItem;
