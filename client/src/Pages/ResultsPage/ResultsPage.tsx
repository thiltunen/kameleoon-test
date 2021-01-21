import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectABtests } from '../../Components/Table/tableSlice';
import './index.scss';

export interface ResultsPageProps {}

interface ParamTypes {
  id: string;
}

const ResultsPage: React.FC<ResultsPageProps> = () => {
  const { id } = useParams<ParamTypes>();
  const ABtests = useSelector(selectABtests);
  const ABtestName = ABtests.find((test) => test.id === +id)?.name;

  return (
    <>
      <h1 className="dashboard-heading">Results</h1>
      <h4>{ABtestName}</h4>
      <div className="back-button">
        <Link className="back-button__link" to="/">
          Back
        </Link>
      </div>
    </>
  );
};
export default ResultsPage;
