import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Skills from './components/skill/Skills';

import { APIUrl } from './Config';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(APIUrl);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(error);
      }
    };
    FetchData();
  }, [error]);

  if (!response) return <div />;
  console.log(response);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <h1 className='x-large text-primary text-center'>
          {response.basics.name}
        </h1>
        <Skills />
      </div>
    </div>
  );
}

export default App;
