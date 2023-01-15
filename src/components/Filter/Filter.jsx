import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterP } from './Filter.styled';
import { changeFilter } from 'components/redux/FilterSlice';

const filterId = nanoid();
export const Filter = () => {
  const filtredText = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <FilterP>Find contacts by name</FilterP>
      <label htmlFor={filterId}></label>
      <FilterInput
        id={filterId}
        type="text"
        value={filtredText}
        onChange={onChangeFilter}
      ></FilterInput>
    </>
  );
};
