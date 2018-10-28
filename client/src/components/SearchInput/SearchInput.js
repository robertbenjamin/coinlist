import React from 'react';
import './SearchInput.css';

const SearchInput = props => {
  return (
    <input
      type='text'
      placeholder='Search for a coin'
      value={props.searchText}
      onChange={props.handleSearchInput}
      className='search-input'></input>
  );
};

export default SearchInput;
