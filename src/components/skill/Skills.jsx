import React from 'react';
import SkillItem from './SkillItem';

const Skills = ({ data }) => {
  return (
    <div style={skillStyle}>
      {data.skills.map(skill => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

const skillStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Skills;
