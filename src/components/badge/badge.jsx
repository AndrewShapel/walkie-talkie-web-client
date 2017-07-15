import React from 'react';
import classnames from 'classnames';

import badgeClassNames from './badge.css';

const Badge = ({ className, count, isInvert }) => {
  const badgeClassName = classnames(badgeClassNames.badge, {
    [badgeClassNames.badge_invert]: isInvert,
  }, className);

  return <div className={badgeClassName}>{count}</div>;
};

Badge.defaultProps = {
  className: '',
  isInvert: true,
};

Badge.propTypes = {
  className: React.PropTypes.string,
  count: React.PropTypes.number.isRequired,
  isInvert: React.PropTypes.bool,
};

export default Badge;
