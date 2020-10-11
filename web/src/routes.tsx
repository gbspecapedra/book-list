import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardView } from './view/DashboardView';
import { LibraryView } from './view/LibraryView';
import { UserView } from './view/UserView';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={DashboardView} />
    <Route path="/home" component={DashboardView} />
    <Route path="/user" component={UserView} />
    <Route path="/library" component={LibraryView} />
  </Switch>
);
