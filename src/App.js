import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Skills from './components/skill/Skills';

import { APIUrl } from './Config';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(APIUrl);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(error);
      }
    };
    FetchData();
  }, [error]);

  if (!data) return <div />;
  console.log(data);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <img
          src={data.basics.picture}
          alt=''
          className='round-border-img all-center'
          style={{ width: '240px' }}
        />
        <h1 className='x-large text-primary text-center'>{data.basics.name}</h1>
        <Skills />
      </div>
    </div>
  );
}

export default App;
