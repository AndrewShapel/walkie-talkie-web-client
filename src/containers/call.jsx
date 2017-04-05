import React from 'react';

import CallParticipant from '../components/call/call-participant/call-participant';

import callClassNames from '../assets/css/containers/call/call.css';

export default () => (
  <div className={callClassNames.call}>
    <CallParticipant />
  </div>
);
