import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SurveyListPage from './pages/SurveyListPage';
import SurveyPage from './pages/SurveyPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={DashboardPage} path={'/'} exact />
      <Route component={SurveyListPage} path={'/survey'} exact />
      <Route component={SurveyPage} path={'/survey/:surveyId'} />
      <Route component={WritePage} path={'/write'} />
      <Route component={SignupPage} path={'/signup'} />
      <Route component={LoginPage} path={'/login'} />
    </>
  );
}

export default App;