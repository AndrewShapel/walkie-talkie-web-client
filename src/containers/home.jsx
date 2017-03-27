import React from 'react';

import Chat from '../components/chat/chat';
import Panel from '../components/panel/panel';

import homeClassNames from '../assets/css/containers/home/home.css';

export default () => (
  <div className={homeClassNames.home}>
    <Panel className={homeClassNames.home__panel} />
    <Chat className={homeClassNames.home__chat} />
  </div>
);
