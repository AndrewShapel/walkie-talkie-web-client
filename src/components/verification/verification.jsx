import React from 'react';
import classnames from 'classnames';

import { VERIFICATION_ITEMS } from '../../constants/verification';

import VerificationHeader from './verification-header/verification-header';
import VerificationContent from './verification-content/verification-content';

import verificationClassNames from './verification.css';

export default class Verification extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    match: React.PropTypes.object,
  };

  static defaultProps = {
    className: '',
    match: {},
  };

  render() {
    const { className, match } = this.props;

    const verificationClassName = classnames(verificationClassNames.verification, className);

    return (
      <div className={verificationClassName}>
        <VerificationHeader
          items={VERIFICATION_ITEMS}
          match={match}
        />
        <VerificationContent match={match} />
      </div>
    );
  }
}
