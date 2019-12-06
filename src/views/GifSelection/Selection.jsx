import React from 'react';
import PropTypes from 'prop-types';
import Image from '../common/Image';

const Selection = ({ imgHeader, imgUrl, onUnlike }) => {
  return ( 
    <div className='gif-selection'>
      <Image
        header={imgHeader}
        imageUrl={imgUrl} />
      <button type='button' onClick={onUnlike}>Unlike</button>
    </div>
   );
};

Selection.propTypes = {
  imgHeader: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  onUnlike: PropTypes.func.isRequired,
}

export default Selection;
