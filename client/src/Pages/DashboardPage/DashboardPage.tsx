import React from 'react';
import Search from '../../Components/Search/Search';
import Table from '../../Components/Table/Table';
import './index.scss';

export interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <>
      <h1 className="dashboard-heading">Dashboard</h1>
      <Search />
      <Table />
    </>
  );
};

export default DashboardPage;
