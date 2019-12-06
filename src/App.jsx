import React from 'react';
import './App.css';

import Header from './views/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header title='Weirdness Calculator' />
      <div className='content'>
        <div className='content-left'>
          content-left
        </div>
        <div className='content-right'>
          content-right
        </div>
      </div>
    </div>
  );
}

export default App;
