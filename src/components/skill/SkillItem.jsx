import React from 'react';
import PropTypes from 'prop-types'

const SkillItem = ({ skill: { name, level, rating, yearsOfExperience } }) => {
  return (
    <div className='card text-center'>
      <h3 className='x-large'>{name}</h3>
      <span>Skill level: {level}</span>
      <span>Rating {rating}</span>
      <div></div>
      <small>Years of experience programming: {yearsOfExperience}</small>
    </div>
  );
};

SkillItem.propTypes = {
    skill: PropTypes.object.isRequired,
}

export default SkillItem;
