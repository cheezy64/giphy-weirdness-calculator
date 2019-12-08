import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { giphyTranslatePhraseToGif } from '../../remote/giphy';
import { REQUIRED_LIKES } from '../../config';

import Search from './Search';
import Slider from '../common/Slider';
import Image from '../common/Image';

import { weirdnessCalculatorOperations } from '../../state/ducks/weirdnessCalculator';

class SearchContainer extends Component {
  state = {
    searchValue: '',
    submittedSearchValue: '',
    submittedImgUrl: '',
    weirdnessValue: 1,
    shouldDisableLike: true,
  };

  onSearchChange = (evt) => {
    const value = evt.target.value;
    this.setState({ searchValue: value });
  }

  onSubmitChange = async (evt) => {
    evt.preventDefault();
    const { searchValue, weirdnessValue } = this.state;
    const imgUrl = await giphyTranslatePhraseToGif(searchValue, weirdnessValue);
    this.setState({
      submittedSearchValue: searchValue,
      submittedImgUrl: imgUrl,
    });
  }

  onWeirdnessChange = async (value) => {
    const { submittedSearchValue } = this.state;
    const imgUrl = await giphyTranslatePhraseToGif(submittedSearchValue, value);
    this.setState({
      weirdnessValue: value,
      submittedImgUrl: imgUrl,
    });
  }

  componentDidUpdate(prevProps) {
    const { submittedSearchValue } = this.state;
    const { liked: likedPrev = [] } = prevProps;
    const { liked } = this.props;
    const shouldDisableLike = liked.some(ele => ele && ele.imgHeader === submittedSearchValue );
    if (likedPrev.length !== liked.length || shouldDisableLike !== this.state.shouldDisableLike) {
      this.setState({ shouldDisableLike });
    }
  }

  render() {
    const {
      onSearchChange,
      onSubmitChange,
      onWeirdnessChange,
    } = this;

    const {
      searchValue,
      weirdnessValue,
      submittedSearchValue,
      submittedImgUrl,
      shouldDisableLike,
    } = this.state;

    const { likedGifs = [], onLike } = this.props;

    const shouldDisableSearch = (!searchValue) || (likedGifs.some(ele => ele && ele.imgHeaderj === searchValue));

    return (
      <div className='search-container'>
        <div className='row'>
          <p>Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the <strong>Like</strong> button. Once you like {REQUIRED_LIKES} GIFs, we'll show you how weird you are.</p>
          <br />
          <Search
            disabled={shouldDisableSearch}
            onChange={onSearchChange}
            onSubmit={onSubmitChange}
            value={searchValue} />
          <Slider
            min={1}
            max={10}
            onChange={onWeirdnessChange} />
          <p>Weirdness: {weirdnessValue}</p>
        </div>
        <div className='row'>
          <div>
          {
            submittedImgUrl
              ? (
                  <React.Fragment>
                    <h1>YOUR RESULT</h1>
                    <div>
                      <Image
                        header={submittedSearchValue}
                        imageUrl={submittedImgUrl} />
                      <button 
                        type='button' 
                        onClick={() => onLike({
                          imgHeader: submittedSearchValue,
                          imgUrl: submittedImgUrl,
                          weirdness: weirdnessValue,
                        })} 
                        disabled={shouldDisableLike}>
                        Like!
                      </button>
                    </div>
                  </React.Fragment>
                )
              : null
            }
          </div>
        </div>
      </div>
    )
  }
};

SearchContainer.propTypes = {
  likedGifs: PropTypes.array,
  onLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  liked: state.weirdnessCalculatorState.likes.liked,
});

const mapDispatchToProps = {
  onLike: weirdnessCalculatorOperations.giphyLike,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);