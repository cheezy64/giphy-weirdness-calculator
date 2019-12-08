import React from 'react';
import Header from './views/Header/Header';
import SearchContainer from './views/GifSearch/SearchContainer';
import SelectionContainer from './views/GifSelection/SelectionContainer';

import './App.css';

function App({ reduxStore }) {
  const liked = [{
    imgHeader: 'birthday',
    imgUrl: 'https://media3.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif?cid=1cdd73c7c5b407cc0caee2fbb279504dc43ff43f064b6515&rid=giphy.gif',
    weirdness: 2
  }, {
    imgHeader: 'homelander',
    imgUrl: 'https://media0.giphy.com/media/YlRpYzrkHbtSYDAlaE/giphy-downsized.gif?cid=1cdd73c7a78c68d17c38986958433f6c083fb6f41f4f343c&rid=giphy-downsized.gif',
    weirdness: 8
  }, {
    imgHeader: 'yoda',
    imgUrl: 'https://media3.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy-downsized.gif?cid=1cdd73c7c8221808c08d8cfd7ca8948b9ad507c53b6bc72a&rid=giphy-downsized.gif',
    weirdness: 7
  }, {
    imgHeader: 'happy',
    imgUrl: 'https://media2.giphy.com/media/3NtY188QaxDdC/giphy-downsized.gif?cid=1cdd73c7c7ae61533a24eb5b22b4e1bf6b6a7c0fe05caa45&rid=giphy-downsized.gif',
    weirdness: 2
  }, {
    imgHeader: 'whatever',
    imgUrl: 'https://media2.giphy.com/media/zMQcrvqjkC9d6/giphy.gif?cid=1cdd73c71e4204b473ef679606d8a325b305c433730034f8&rid=giphy.gif',
    weirdness: 3
  }];
  return (
    <div className='App'>
      <Header title='Weirdness Calculator' />
      <div className='content'>
        <div className='row'>
          <div className='column'>
            <SearchContainer />
          </div>
          <div className='column'>
            <SelectionContainer liked={liked} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
