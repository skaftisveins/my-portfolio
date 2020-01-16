import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

const Skills = ({ id, data }) => {
  return (
    <div style={skillStyle}>
      {data.skills.map(skill => (
        <SkillItem id={id} key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

// Refactor as Section styled item..?
const skillStyle = {
  flexWrap: 'wrap',
  flexDirection: 'column'
  // gridTemplateColumns: 'repeat(3, 1fr)',
  // gridGap: '1rem'
};

export default Skills;
