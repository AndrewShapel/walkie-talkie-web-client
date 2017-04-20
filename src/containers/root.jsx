import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes/routes';

import rootClassNames from '../assets/css/containers/root/root.css';

import Home from '../containers/home';
import Conversation from '../containers/conversation';
import Call from '../containers/call';
import UserVerification from '../containers/user-verification';
import NotFound from '../containers/not-found';

const Root = () => (
  <div className={rootClassNames.root}>
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home.url} component={Home} />
        <Route path={routes.conversation.url} component={Conversation} />
        <Route path={routes.call.url} component={Call} />
        <Route path={routes.userVerification.url.base} component={UserVerification} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Root;
