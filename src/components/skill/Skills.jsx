import React, { useState } from 'react';
import SkillItem from './SkillItem';

const Skills = () => {
  const [state] = useState({
    skills: [
      {
        id: 1,
        name: 'HTML5',
        level: 'Intermediate',
        rating: 3,
        yearsOfExperience: 2,
        keywords: []
      },
      {
        id: 2,
        name: 'CSS3',
        level: 'Intermediate',
        rating: 3,
        yearsOfExperience: 2,
        keywords: []
      },
      {
        id: 3,
        name: 'JavaScript',
        level: 'Advanced',
        rating: 4,
        yearsOfExperience: 1,
        keywords: []
      }
    ]
  });
  return (
    <div style={skillStyle}>
      {state.skills.map(skill => (
        <SkillItem key={skill.id} skill={skill} />
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
