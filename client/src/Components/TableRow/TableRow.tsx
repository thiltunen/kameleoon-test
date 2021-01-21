import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectSites } from '../Table/tableSlice';
import { Link } from 'react-router-dom';
import './index.scss';
interface TableRowProps {
  name: string;
  type: string;
  status: string;
  siteId: number;
  testId: number;
}

const getColorText = (status: string) => {
  switch (status) {
    case 'ONLINE':
      return 'text-color--green';
    case 'PAUSED':
      return 'text-color--orange';
    case 'STOPPED':
      return 'text-color--red';
    default:
      break;
  }
};

const getRowColor = (url: string) => {
  switch (url) {
    case 'market.company.com':
      return 'row-color--red';
    case 'delivery.company.com':
      return 'row-color--light-purple';
    case 'games.company.com':
      return 'row-color--purple';
    default:
      break;
  }
};

const TableRow: React.FC<TableRowProps> = ({ name, type, status, siteId, testId }) => {
  const sites = useSelector(selectSites);
  const url = sites
    .find((site) => site.id === siteId)
    ?.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
    .split('/')[0];

  return (
    <li className="row">
      <div className="ab-test__name">
        <span className={getRowColor(url!)}></span>
        <span>{name}</span>
      </div>
      <div className="ab-test__props">
        <span className="ab-test__props--item">{type}</span>
      </div>
      <div className="ab-test__props">
        <span className={`ab-test__props--item ${getColorText(status)}`}>{status}</span>
      </div>
      <div className="ab-test__props">
        <span className="ab-test__props--item">{url}</span>
      </div>
      <div className="ab-test__props">
        {status === 'DRAFT' ? (
          <Link to={`/finalize/${testId}`}>
            <button className="ab-test__button ab-test__button--grey">Finalize</button>
          </Link>
        ) : (
          <Link to={`/results/${testId}`}>
            <button className="ab-test__button ab-test__button--green">Results</button>
          </Link>
        )}
      </div>
    </li>
  );
};

export default memo(TableRow);
