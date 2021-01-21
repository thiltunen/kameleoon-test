import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue, filterByText } from '../Search/searchSlice';
import { getABtests, getABtestsThunk, getSitesThunk, selectABtests } from './tableSlice';
import TableRow from '../TableRow/TableRow';
import './index.scss';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue: string = useSelector(selectInputValue);
  const ABtests = useSelector(selectABtests);
  const count = ABtests.filter((ABtest) => ABtest.name.toLowerCase().match(inputValue));
  const [nameSort, setNameSort] = useState<Boolean>(false);
  const [typeSort, setTypeSort] = useState<Boolean>(false);
  const [siteSort, setSiteSort] = useState<Boolean>(false);
  const [statusSort, setStatusSort] = useState<Boolean>(false);

  type typeOptions = {
    [key: string]: number;
  };

  const statusAscSorting: typeOptions = {
    ONLINE: 1,
    PAUSED: 2,
    STOPPED: 3,
    DRAFT: 4,
  };

  useEffect(() => {
    dispatch(getABtestsThunk());
    dispatch(getSitesThunk());
  }, [dispatch]);

  const sortByName = () => {
    if (nameSort) {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.name < b.name ? 1 : -1))));
      setNameSort(!nameSort);
    } else {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.name < b.name ? -1 : 1))));
      setNameSort(!nameSort);
    }
  };

  const sortByType = () => {
    if (typeSort) {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.type < b.type ? 1 : -1))));
      setTypeSort(!typeSort);
    } else {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.type < b.type ? -1 : 1))));
      setTypeSort(!typeSort);
    }
  };

  const sortBySite = () => {
    if (siteSort) {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.name < b.name ? 1 : -1))));
      setSiteSort(!siteSort);
    } else {
      dispatch(getABtests([...ABtests].sort((a, b) => (a.name < b.name ? -1 : 1))));
      setSiteSort(!siteSort);
    }
  };

  const sortByStatus = () => {
    if (statusSort) {
      dispatch(
        getABtests(
          [...ABtests].sort(
            (a, b) => statusAscSorting[b.status] - statusAscSorting[a.status]
          )
        )
      );
      setStatusSort(!statusSort);
    } else {
      dispatch(
        getABtests(
          [...ABtests].sort(
            (a, b) => statusAscSorting[a.status] - statusAscSorting[b.status]
          )
        )
      );
      setStatusSort(!statusSort);
    }
  };

  const clickHandler = () => {
    dispatch(filterByText(''));
  };

  return (
    <div className="dashboard-container">
      {count.length ? (
        <ul className="ab-tests-list">
          <li className="row table-header">
            <div className="ab-test__name-header">
              <span onClick={sortByName} className="ab-test__props--item util-upper-case">
                Name
              </span>
            </div>
            <div className="ab-test__props">
              <span onClick={sortByType} className="ab-test__props--item util-upper-case">
                Type
              </span>
            </div>
            <div className="ab-test__props">
              <span
                onClick={sortByStatus}
                className="ab-test__props--item util-upper-case"
              >
                Status
              </span>
            </div>
            <div className="ab-test__props">
              <span onClick={sortBySite} className="ab-test__props--item util-upper-case">
                Site
              </span>
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
