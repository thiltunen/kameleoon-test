import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByText, selectInputValue } from './searchSlice';
import iconSet from './selection.json';
import IcomoonReact from 'icomoon-react';
import './index.scss';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  return (
    <div className="search">
      <IcomoonReact iconSet={iconSet} className="search__icon" icon="search" />
      <input
        className="search__input"
        placeholder="What test are you looking for?"
        value={inputValue}
        onChange={(e) => dispatch(filterByText(e.target.value))}
      />
      1
    </div>
  );
};

export default Search;
