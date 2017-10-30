import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from '../components/NotFound';

export const DefaultRouteConfig = () =>  (
  <BrowserRouter>
    <Switch>
      <Route path="/:userId/:eventId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);