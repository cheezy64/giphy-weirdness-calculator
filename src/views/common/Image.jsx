import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ header, imageUrl, altText }) => {
  const computedAltText = altText ? altText : header;
  return (
    <div className='image-frame'>
      <p>{header}</p>
      <img src={imageUrl} alt={computedAltText} />
    </div>
  )
};

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  header: PropTypes.string,
  altText: PropTypes.string,
}

export default Image;
