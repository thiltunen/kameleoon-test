import React from 'react';
import DashboardPage from '../Pages/DashboardPage/DashboardPage';
import { Route, Switch } from 'react-router-dom';
import ResultsPage from '../Pages/ResultsPage/ResultsPage';
import FinalizePage from '../Pages/FinalizePage/FinalizePage';
import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/results/:id">
        <ResultsPage />
      </Route>
      <Route path="/finalize/:id">
        <FinalizePage />
      </Route>
      <Route path="/">
        <DashboardPage />
      </Route>
    </Switch>
  );
}

export default App;
