import React from 'react';

import { FORM_VALIDATIONS, VERIFICATION_TYPES } from '../../../constants/common';

import VerificationSignIn from '../verification-sign-in/verification-sign-in';
import VerificationSignUp from '../verification-sign-up/verification-sign-up';

import verificationContentClassNames from '../../../assets/css/blocks/verification/verification-content/verification-content.css';

class VerificationContent extends React.PureComponent {
  /**
   * @param {String} type
   * @param {Object} validations
   * @returns {Object}
   */
  static renderContent(type, validations) {
    switch (type) {
      case VERIFICATION_TYPES.SIGN_IN:
        return <VerificationSignIn validations={validations} />;
      case VERIFICATION_TYPES.SIGN_UP:
        return <VerificationSignUp validations={validations} />;
      default:
        return null;
    }
  }

  constructor(props) {
    super(props);

    /**
     * @type {Object}
     */
    this.validations = {
      email: {
        types: {
          [FORM_VALIDATIONS.isEmail.type]: true,
        },
        errors: {
          [FORM_VALIDATIONS.isEmail.type]: FORM_VALIDATIONS.isEmail.errorMessage,
        },
      },
      firstLastName: {
        types: {
          [FORM_VALIDATIONS.isAlpha.type]: true,
        },
        errors: {
          [FORM_VALIDATIONS.isAlpha.type]: FORM_VALIDATIONS.isAlpha.errorMessage,
        },
      },
      passwordRepeat: {
        types: {
          [FORM_VALIDATIONS.isEqualsField.type]: 'password',
        },
        errors: {
          [FORM_VALIDATIONS.isEqualsField.type]: 'Password does not match',
        },
      },
    };
  }

  render() {
    const { activeTypeItem } = this.props;

    return (
      <div className={verificationContentClassNames['verification-content']}>
        {VerificationContent.renderContent(activeTypeItem, this.validations)}
      </div>
    );
  }
}

VerificationContent.defaultProps = {
  activeTypeItem: '',
};

VerificationContent.propTypes = {
  activeTypeItem: React.PropTypes.string,
};

export default VerificationContent;
