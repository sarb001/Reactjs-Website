import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import SocialLinks from './SocialLinks';
import About from './About';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
       <h2> 
           <Navbar /> 
           <Home />
           <SocialLinks />
           <About />
           <Portfolio />
       </h2>
    </div>
  );
}

export default App;
