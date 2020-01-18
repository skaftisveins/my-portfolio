import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const Projects = ({ id, data, title }) => {
  return (
    <>
      <h3 className='x-large'>{title}</h3>
      <div className='cards'>
        {data.projects.map(project => (
          <ProjectItem id={id} key={project.name} project={project} />
        ))}
      </div>
    </>
  );
};

Projects.defaultProps = {
  title: 'My Projects'
};

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default Projects;
