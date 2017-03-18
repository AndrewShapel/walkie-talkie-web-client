import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import About from './About';
import NotFound from './NotFound';

const Layout = ({ name = 'world' }) => (
  <Router>
    <div className="main">
      <header>
        <h2>App header</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </header>
      <section>
        <h2 className="foo">Hello, {name}</h2>
        <Switch>
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </div>
  </Router>
);

Layout.defaultProps = {
  name: 'world',
};

Layout.propTypes = {
  name: React.PropTypes.string,
};

export default Layout;
