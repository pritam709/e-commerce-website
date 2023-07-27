import React from 'react';
import './App.css';

import NavbarFn from './components/Navbar';
import Header from './components/Header';
import Music from './components/Music';

function App() {
  return (
    <div className="App">
      <NavbarFn/>
      <Header/>
      <Music/>
    </div>
  );
}

export default App;
