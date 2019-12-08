import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Header from './views/Header/Header';
import SearchContainer from './views/GifSearch/SearchContainer';
import SelectionContainer from './views/GifSelection/SelectionContainer';

import './App.css';

function App({ reduxStore }) {
  return (
    <ReduxProvider store={reduxStore}>
      <div className='App'>
        <Header title='Weirdness Calculator' />
        <div className='content'>
          <div className='row'>
            <div className='column'>
              <SearchContainer />
            </div>
            <div className='column'>
              <SelectionContainer />
            </div>
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}

export default App;
