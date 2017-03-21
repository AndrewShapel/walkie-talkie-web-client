import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes/routes';

import About from '../containers/about';
import Home from '../containers/home';
import NotFound from '../containers/not-found';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.home.url} component={Home} />
      <Route path={routes.about.url} component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Root;
