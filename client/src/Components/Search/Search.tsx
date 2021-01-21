import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByText, selectInputValue } from './searchSlice';
import iconSet from './selection.json';
import IcomoonReact from 'icomoon-react';
import { selectABtests } from '../Table/tableSlice';
import './index.scss';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const inputValue: string = useSelector(selectInputValue);
  const dispatch = useDispatch();
  const ABtests = useSelector(selectABtests).filter((ABtest) =>
    ABtest.name.toLowerCase().match(inputValue)
  );

  const [count, setCount] = useState<number>(ABtests.length);

  useEffect(() => {
    setCount(ABtests.length);
  }, [ABtests.length]);

  return (
    <div className="search">
      <IcomoonReact iconSet={iconSet} className="search__icon" icon="search" />
      <input
        className="search__input"
        placeholder="What test are you looking for?"
        value={inputValue}
        onChange={(e) => dispatch(filterByText(e.target.value))}
      />
      <span className="search__number">{count}&nbsp;tests</span>
    </div>
  );
};

export default Search;
