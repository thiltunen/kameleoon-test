import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectABtests } from '../../Components/Table/tableSlice';

export interface FinalizePageProps {}

interface ParamTypes {
  id: string;
}

const FinalizePage: React.FC<FinalizePageProps> = () => {
  const { id } = useParams<ParamTypes>();
  const ABtests = useSelector(selectABtests);
  const ABtestName = ABtests.find((test) => test.id === +id)?.name;

  return (
    <>
      <h1 className="dashboard-heading">Finalize</h1>
      <h4>{ABtestName}</h4>
      <div className="back-button">
        <Link className="back-button__link" to="/">
          Back
        </Link>
      </div>
    </>
  );
};

export default FinalizePage;
