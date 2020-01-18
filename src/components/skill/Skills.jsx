import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

import '../../App.css';

const Skills = ({ id, data, title }) => {
  return (
    <>
      <h3 className='x-large'>{title}</h3>
      <div className='cards'>
        {data.skills.map(skill => (
          <SkillItem id={id} key={skill.name} skill={skill} />
        ))}
      </div>
    </>
  );
};

Skills.defaultProps = {
  title: 'Skills'
};

Skills.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default Skills;
