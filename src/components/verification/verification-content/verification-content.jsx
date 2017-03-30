import React from 'react';

import { VERIFICATION_TYPES } from '../../../constants/common';

import VerificationSignIn from '../verification-sign-in/verification-sign-in';

class VerificationContent extends React.PureComponent {
  /**
   * @param {String} type
   * @returns {Object}
   */
  static renderContent(type) {
    switch (type) {
      case VERIFICATION_TYPES.SIGN_IN:
        return <VerificationSignIn />;
      case VERIFICATION_TYPES.SIGN_UP:
        return null;
      default:
        return null;
    }
  }

  render() {
    const { activeTypeItem } = this.props;

    return VerificationContent.renderContent(activeTypeItem);
  }
}

VerificationContent.defaultProps = {
  activeTypeItem: '',
};

VerificationContent.propTypes = {
  activeTypeItem: React.PropTypes.string,
};

export default VerificationContent;
