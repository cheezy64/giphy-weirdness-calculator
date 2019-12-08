import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({
  onSubmit,
  onChange,
  value,
  disabled,
}) => {
  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <label htmlFor='search'>Gif Search</label>
        <input type='text' id='search' onChange={onChange} value={value} />
        <button type='submit' className='btn btn-primary' disabled={disabled} >SEARCH</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default Search;