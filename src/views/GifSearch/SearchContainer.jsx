import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { giphyTranslatePhraseToGif } from '../../remote/giphy';
import { REQUIRED_LIKES } from '../../config';

import Search from './Search';
import Slider from '../common/Slider';
import Image from '../common/Image';

class SearchContainer extends Component {
  state = {
    searchValue: '',
    submittedSearchValue: '',
    submittedImgUrl: '',
    weirdnessValue: 1,
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
    } = this.state;

    const { likedGifs = [], onLike } = this.props;

    const shouldDisableSubmit = (!searchValue) || (likedGifs.some(ele => ele && ele.searchValue === searchValue));
    const shouldDisableLike = !!submittedSearchValue;

    return (
      <div className='search-container'>
        <div className='row'>
          <p>Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the <strong>Like</strong> button. Once you like {REQUIRED_LIKES} GIFs, we'll show you how weird you are.</p>
          <br />
          <Search
            disabled={shouldDisableSubmit}
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
                      <button type='button' onClick={onLike} disabled={shouldDisableLike}>Like!</button>
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
}

export default SearchContainer;