import React from 'react';
import PropTypes from 'prop-types';

export const Filter = props => {
  return (
    <label>
      <span>Search:</span>
      <input name="filter" onChange={props.onInputHandler}></input>
    </label>
  );
};

Filter.propTypes = {
  onInputHandler: PropTypes.func.isRequired,
};
