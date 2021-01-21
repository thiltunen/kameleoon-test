import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInputValue } from '../Search/searchSlice';
import TableRow from '../TableRow/TableRow';
import { getABtestsThunk, selectABtests } from './tableSlice';
import './index.scss';

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue: string = useSelector(selectInputValue);
  const ABtests = useSelector(selectABtests);

  useEffect(() => {
    dispatch(getABtestsThunk());
  }, [dispatch]);

  return (
    <div className="dashboard-container">
      <ul className="ab-tests-list">
        {ABtests.length
          ? ABtests.filter((ABtest) =>
              ABtest.name.toLowerCase().match(inputValue)
            ).map((ABtest) => (
              <TableRow
                key={ABtest.id}
                name={ABtest.name}
                type={ABtest.type}
                status={ABtest.status}
                siteId={ABtest.siteId}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Table;
