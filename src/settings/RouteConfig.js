import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from '../components/NotFound';
import AvPriv from '../components/AvPriv';
import TermsCond from '../components/TermsCond';
import FoafGraph from '../components/FoafGraph';

export const DefaultRouteConfig = () =>  (
  <BrowserRouter>
    <Switch>
      <Route path="/:userId/:eventId" component={App} />
      <Route path="/avisodeprivacidad" component={AvPriv} />
      <Route path="/terminosycondiciones" component={TermsCond} />
      <Route path="/foafweb" component={FoafGraph} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);