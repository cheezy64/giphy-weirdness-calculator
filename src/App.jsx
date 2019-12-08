import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';

import Header from './views/Header/Header';
import SearchContainer from './views/GifSearch/SearchContainer';
import SelectionContainer from './views/GifSelection/SelectionContainer';
import WeirdnessCalculator from './views/WeirdnessCalculator/WeirdnessCalculator';

import './App.css';

function App({ reduxStore }) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={reduxStore}>
        <Router>
          <div className='App'>
            <Header title='Weirdness Calculator' />
            <div className='content'>
              <Switch>
                <Route exact path='/'>
                  <div className='row'>
                    <div className='column'>
                      <SearchContainer />
                    </div>
                    <div className='column'>
                      <SelectionContainer />
                    </div>
                  </div>
                </Route>
                <Route path='/results' component={WeirdnessCalculator} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
