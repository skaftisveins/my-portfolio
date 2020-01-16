import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const Projects = ({ id, data }) => {
  return (
    <div style={projectStyle}>
      {data.projects.map(project => (
        <ProjectItem id={id} key={project.name} project={project} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

// Refactor as Section styled item..?
const projectStyle = {
  display: 'grid',
  gridTemplateColumns: 'reapeat(3, 1fr)',
  gridGap: '1rem'
};

export default Projects;
