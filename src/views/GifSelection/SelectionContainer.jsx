import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { REQUIRED_LIKES } from '../../config';

import Selection from './Selection';

class SelectionContainer extends Component {
  render() {
    const { 
      liked = [],
    } = this.props;
    const remainingRequiredLikes = REQUIRED_LIKES - liked.length;

    return (
      <div className='selection-container'>
        <h1>YOUR LIKED GIFS</h1>
        <div className='selection-liked'>
          {
            liked.map(ele => 
              <Selection 
                imgHeader={ele.imgHeader}
                imgUrl={ele.imgUrl}
                onUnlike={ele.onUnlike} />
            )
          }
        </div>
        <button type='button' disabled={liked.length < REQUIRED_LIKES}>CALCULATE MY WEIRDNESS SCORE</button>
        <p>{`You must like ${remainingRequiredLikes} more ${remainingRequiredLikes === 1 ? 'GIF' : 'GIFs'} to calculate your score`}</p>
      </div>
    )
  }
};

SelectionContainer.propTypes = {
  liked: PropTypes.array,
}

export default SelectionContainer;
