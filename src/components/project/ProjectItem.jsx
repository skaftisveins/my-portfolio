import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({
  id,
  project: {
    displayName,
    summary,
    website,
    githubUrl,
    languages,
    libraries,
    images
  }
}) => {
  return (
    <div id={id}>
      <div className='card text-center'>
        <h3 className='x-large'>{displayName}</h3>
        <span>{summary}</span>
        <span>{githubUrl}</span>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default ProjectItem;
