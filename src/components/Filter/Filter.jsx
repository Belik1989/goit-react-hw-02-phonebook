import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SearchBox, SearchInput } from './Filter.styled';

export const Filter = props => {
  return (
    <SearchBox>
      <BiSearchAlt2 />
      <label>
        <SearchInput
          name="filter"
          onChange={props.onInputHandler}
          placeholder="Search by name"
        ></SearchInput>
      </label>
    </SearchBox>
  );
};

Filter.propTypes = {
  onInputHandler: PropTypes.func.isRequired,
};
