import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ min=1, max=10, defaultValue=0, onChange }) => {
  const getSliderValue = (evt) => onChange(parseInt(evt.target.value, 10));
  return (
    <div className='slidecontainer'>
      <input
        className='slider'
        type='range'
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={getSliderValue} />
    </div>
  )
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Slider;