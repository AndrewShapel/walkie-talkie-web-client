import React from 'React';

import callActionsClassNames from '../../assets/css/blocks/call-actions/call-actions.css';

export default () => (
  <div className={callActionsClassNames.callActions}>
    <div className={callActionsClassNames.callActions__action}>
      <object className={callActionsClassNames.callActions__actionIcon} data="assets/icons/svg/video-camera.svg" type="image/svg+xml" />
    </div>
    <div className={callActionsClassNames.callActions__action}>
      <object className={callActionsClassNames.callActions__actionIcon} data="assets/icons/svg/phone.svg" type="image/svg+xml" />
    </div>
  </div>
);
