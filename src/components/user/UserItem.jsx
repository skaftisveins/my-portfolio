import React, { useState } from 'react';

const UserItem = () => {
  const [state, setState] = useState({
    name: 'Skafti Sveinsson',
    picture: 'https://avatars3.githubusercontent.com/u/44779638?v=4',
    yearsOfExperience: 2,
    profiles: {
      url: 'https://github.com/skaftisveins'
    }
  });

  const { name, picture, yearsOfExperience, url } = state;

  return (
    <div className='card text-center'>
      <img
        src={picture}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{name}</h3>
      <div>
        <a href={url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
      <small className='x-large'>
        Years of experience programming: {yearsOfExperience}
      </small>
    </div>
  );
};

export default UserItem;
