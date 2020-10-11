import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardView } from './view/DashboardView';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={DashboardView} />
  </Switch>
);
