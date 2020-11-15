import React from 'react';
import './App.css';
import Banner from './components/banner';
import Contact from './components/contact';
import Details from './components/details';
import Education from './components/education'

const App = () => {
  return (
    <div className = "app">
      <Banner />
      <Contact />
      <hr />
      <div className="cont">
        <Details />
        <Education />
      </div>
    </div>
  );    
}

export default App;