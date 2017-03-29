import React from 'react';
import classnames from 'classnames';

import { VERIFICATION_TYPES, VERIFICATION_ITEMS } from '../../constants/common';

import VerificationHeader from './verification-header/verification-header';

import verificationClassNames from '../../assets/css/blocks/verification/verification.css';

class Verification extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: VERIFICATION_TYPES.SIGN_IN,
    };

    this.onItemSelect = this.onItemSelect.bind(this);
  }

  /**
   * @param {String} type
   */
  onItemSelect(type) {
    if (type !== this.state.selectedType) {
      this.setState({
        selectedType: type,
      });
    }
  }

  render() {
    const { selectedType } = this.state;
    const { className } = this.props;

    const verificationClassName = classnames(verificationClassNames.verification, className);

    return (
      <div className={verificationClassName}>
        <VerificationHeader
          items={VERIFICATION_ITEMS}
          activeItemType={selectedType}
          onItemSelect={this.onItemSelect}
        />
      </div>
    );
  }
}

Verification.defaultProps = {
  className: '',
};

Verification.propTypes = {
  className: React.PropTypes.string,
};

export default Verification;
