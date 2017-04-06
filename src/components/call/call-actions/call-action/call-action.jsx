import React from 'react';
import classnames from 'classnames';

import Svg from '../../../svg/svg';

import callActionClassNames from './call-action.css';

const CallAction = ({ className, iconClassName, icon }) => {
  const actionClassName = classnames(callActionClassNames['call-action'], className);
  const actionIconClassName = classnames(callActionClassNames['call-action__icon'], iconClassName);

  return (
    <div className={actionClassName}>
      <Svg className={actionIconClassName} icon={icon} />
    </div>
  );
};

CallAction.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
};

CallAction.defaultProps = {
  className: '',
  iconClassName: '',
};

export default CallAction;
