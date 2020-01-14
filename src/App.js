import React, { useState, useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from './components/layout/Navbar';
import Skills from './components/skill/Skills';

import { APIUrl } from './Config';
import './App.css';
import About from './components/layout/About';
import Section from './components/layout/Section';
import mockText from './MockData';

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  if (!data) return <div />;
  console.log(data.basics);

  return (
    <div className='App id=section0'>
      <Navbar />
      <div className='container text-center'>
        <img
          src={data.basics.picture}
          alt=''
          className='round-border-img all-center'
          style={{ width: '240px' }}
        />
        <h1 className='x-large text-primary'>{data.basics.name}</h1>
        <span>{data.basics.summary}</span>
        <Section id='section1' title={data.basics.label} />

        <Skills data={data} />
        <Section id='section2' title='Section 2 - Resume' subtitle={mockText} />
        <Section
          id='section3'
          title='Section 3 - Contact'
          subtitle={mockText}
        />
        <About />
        <Link to='section0' smooth={true} onClick={scrollToTop}>
          LETS GO TO THE TOP!
        </Link>
      </div>
    </div>
  );
}

export default App;
