import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <h2> 
           <Navbar /> 
           <Home />
       </h2>
    </div>
  );
}

export default App;
