import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { REQUIRED_LIKES } from '../../config';

import Selection from './Selection';

import { weirdnessCalculatorOperations } from '../../state/ducks/weirdnessCalculator';

const SelectionContainer = ({ liked = [], onUnlike }) => {
  const remainingRequiredLikes = REQUIRED_LIKES - liked.length;

  const history = useHistory();

  return (
    <div className='selection-container'>
      <h1>YOUR LIKED GIFS</h1>
      <div className='selection-liked'>
        {
          liked.map(ele => 
            <Selection 
              imgHeader={ele.imgHeader}
              imgUrl={ele.imgUrl}
              onUnlike={ () => onUnlike(ele.imgHeader) } />
          )
        }
      </div>
      <button 
        type='button' 
        disabled={liked.length < REQUIRED_LIKES}
        onClick={() => history.push('/results')}
        >
          CALCULATE MY WEIRDNESS SCORE
        </button>
      <p>{`You must like ${remainingRequiredLikes} more ${remainingRequiredLikes === 1 ? 'GIF' : 'GIFs'} to calculate your score`}</p>
    </div>
  )
};

SelectionContainer.propTypes = {
  liked: PropTypes.array,
  onUnlike: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  liked: state.weirdnessCalculatorState.likes.liked,
});

const mapDispatchToProps = {
  onUnlike: weirdnessCalculatorOperations.giphyUnlike,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionContainer);
