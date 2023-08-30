import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterDiv } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(setFilter(e.target.value));
  return (
    <FilterDiv>
      <label>Find contact by Name: </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChange(e)}
      />
    </FilterDiv>
  );
};
