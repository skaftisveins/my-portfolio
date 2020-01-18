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
    <div id={id} className='card'>
      <h3 className='lead'>{displayName}</h3>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image.resolutions.mobile.url} alt='' />
        ))}
      </div>
      <span>{summary}</span>
      <span>{githubUrl}</span>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default ProjectItem;
