import React from 'react';
import classnames from 'classnames';

import CallParticipant from './call-participant/call-participant';
import CallFooter from './call-footer/call-footer';
import ChatContent from '../chat/chat-content/chat-content';

import callClassNames from './call.css';

const Call = ({ className }) => {
  const callClassName = classnames(callClassNames.call, className);

  return (
    <div className={callClassName}>
      <div className={callClassNames.call__participants}>
        <CallParticipant />
      </div>
      <CallFooter />
      <div className={callClassNames.call__chat}>
        <ChatContent />
      </div>
    </div>
  );
};

Call.propTypes = {
  className: React.PropTypes.string,
};

Call.defaultProps = {
  className: '',
};

export default Call;
