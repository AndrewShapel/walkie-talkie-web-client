import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './About';
import NotFound from './NotFound';

const Content = () => (
  <div className="main">
    <section>
      <h2 className="foo">Hello, world!</h2>
      <Switch>
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </section>
  </div>
);

export default Content;
