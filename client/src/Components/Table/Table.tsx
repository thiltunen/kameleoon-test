import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue, filterByText } from '../Search/searchSlice';
import { getABtestsThunk, getSitesThunk, selectABtests } from './tableSlice';
import TableRow from '../TableRow/TableRow';
import './index.scss';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue: string = useSelector(selectInputValue);
  const ABtests = useSelector(selectABtests);
  const count = ABtests.filter((ABtest) => ABtest.name.toLowerCase().match(inputValue))
    .length;

  useEffect(() => {
    dispatch(getABtestsThunk());
    dispatch(getSitesThunk());
  }, [dispatch]);

  const clickHandler = () => {
    dispatch(filterByText(''));
  };

  return (
    <div className="dashboard-container">
      {count ? (
        <ul className="ab-tests-list">
          <li className="row table-header">
            <div className="ab-test__name-header">
              <span className="ab-test__props--item util-upper-case">Name</span>
            </div>
            <div className="ab-test__props">
              <span className="ab-test__props--item util-upper-case">Type</span>
            </div>
            <div className="ab-test__props">
              <span className="ab-test__props--item util-upper-case">Status</span>
            </div>
            <div className="ab-test__props">
              <span className="ab-test__props--item util-upper-case">Site</span>
            </div>
          </li>
          {ABtests.filter((ABtest) => ABtest.name.toLowerCase().match(inputValue)).map(
            (ABtest) => (
              <TableRow
                key={ABtest.id}
                name={ABtest.name}
                type={ABtest.type}
                status={ABtest.status}
                siteId={ABtest.siteId}
                testId={ABtest.id}
              />
            )
          )}
        </ul>
      ) : ABtests.length ? (
        <>
          <div className="no-items">Your search did not match any results.</div>
          <button
            onClick={clickHandler}
            className="ab-test__button ab-test__button--green"
          >
            Reset
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Table;
