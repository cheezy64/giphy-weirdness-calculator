import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Image = ({ header, imageUrl, altText=header }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, [imageUrl])

  return (
    <div className='image-frame'>
      <p>{header}</p>
      <div style={{ display: isLoading ? 'block' : 'none'}}>
        Loading...
      </div>
      <div style={{ display: isLoading ? 'none' : 'block'}}>
        <img src={imageUrl} alt={altText} onLoad={() => setIsLoading(false)} />
      </div>
    </div>
  )
};

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  header: PropTypes.string,
  altText: PropTypes.string,
}

export default Image;
