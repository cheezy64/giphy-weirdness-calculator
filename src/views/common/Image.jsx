import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ClipLoader } from 'react-spinners';

import './Image.css';

const Image = ({ header, imageUrl, altText=header }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  }, [imageUrl])

  return (
    <div className='image-frame'>
      <p>{header}</p>
      <div className='image'>
        <div style={{ display: isLoading ? 'block' : 'none'}}>
          <ClipLoader loading={isLoading} />
        </div>
        <div style={{ display: isLoading ? 'none' : 'block'}}>
          <img src={imageUrl} alt={altText} onLoad={() => setIsLoading(false)} />
        </div>
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
