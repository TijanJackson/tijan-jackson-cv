import React from 'react';
import Header from './Header.js';
import About from './About.js';
import Skills from './Skills.js';
import Education from './Education.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div id="proj">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="edu">
        <Education />
      </div>
      <div id="exp">
        <Experience />
      </div>
    </div>
  );
}

export default App;
