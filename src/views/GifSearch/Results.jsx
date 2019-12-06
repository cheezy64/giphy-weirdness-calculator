import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../common/Slider';
import Image from '../common/Image';

const Results = ({ imgHeader, imgUrl, onLike, weirdness, onWeirdnessChange }) => {
  return (
    <div>
      <h1>YOUR RESULT</h1>
      <Image
        header={imgHeader}
        imageUrl={imgUrl} />
      <button type='button' onClick={onLike}>Like!</button>
      <Slider
        min={1}
        max={10}
        onChange={onWeirdnessChange} />
      <p>Weirdness: {weirdness}</p>
    </div>
  );
};

Results.propTypes = {
  imgHeader: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
  onWeirdnessChange: PropTypes.func.isRequired,
  weirdness: PropTypes.number.isRequired
};

export default Results;
