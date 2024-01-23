import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}

export default App;
