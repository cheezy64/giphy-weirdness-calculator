import React from 'react';
import PropTypes from 'prop-types';

import Image from '../common/Image';

const WeirdnessCalculator = ({ liked = [] }) => {
  const average = liked.length > 0 
    ? Math.floor(liked.reduce((prev, {weirdness}) => prev+weirdness, 0) / liked.length)
    : 0;
  return (
    <div>
      <h1>You scored an {average} out of 10 on the weirdness scale</h1>
      <div className='selection-liked'>
        {
          liked.map(ele => (
            <div className='gif-selection'>
              <Image
                header={ele.imgHeader}
                imageUrl={ele.imgUrl} />
              <p>{ele.weirdness}/10</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

WeirdnessCalculator.propTypes = {
  liked: PropTypes.array,
}

export default WeirdnessCalculator;