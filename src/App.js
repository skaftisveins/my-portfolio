import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Particles from 'react-particles-js';

import Navbar from './components/layout/Navbar';
import Skills from './components/skill/Skills';
import Projects from './components/project/Projects';
import Contact from './components/layout/Contact';
import About from './components/layout/About';
import Section from './components/layout/Section';
import mockText from './MockData';

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800
        }
      },
      line_linked: {
        enable: true,
        opacity: 0.08
      }
    }
  };

  if (!data) return <div />;
  console.log(data.projects[2].images);
  console.log(data.projects[2].images[0].resolutions.mobile.url);

  return (
    <div className='App' id='section0'>
      <Navbar />
      <Particles className='particles' params={particlesOptions} />
      <div className='container text-center'>
        <img
          src={data.basics.picture}
          alt=''
          className='round-border-img all-center'
          style={{ width: '240px' }}
        />
        <h1 className='x-large text-light'>{data.basics.name}</h1>
        <span className='lead'>{data.basics.summary}</span>
        <Section id='section1' title={data.basics.label} />
        <Skills data={data} id='section2' />
        <Projects data={data} id='section3' />
        <Contact id='section4' />
        <Link
          to='section0'
          smooth={true}
          onClick={scrollToTop}
          spy={true}
          duration={200}
        >
          LETS GO TO THE TOP!
        </Link>
      </div>
    </div>
  );
}

export default App;
