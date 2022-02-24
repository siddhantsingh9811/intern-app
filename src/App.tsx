import React from 'react';
import Info from './Components/Info';
import Main from './Components/Main';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Main />
      <Info />
    </div>
  );
}

export default App;
