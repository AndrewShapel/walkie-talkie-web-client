import React from 'react';
import classnames from 'classnames';

import verificationHeaderItemClassNames from '../../../../assets/css/blocks/verification/verification-header/verification-header-item/verification-header-item.css';

class VerificationHeaderItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { type, onClick } = this.props;

    if (onClick) {
      onClick(type);
    }
  }

  render() {
    const { title, isActive } = this.props;

    const verificationHeaderItemClassName = classnames(verificationHeaderItemClassNames['verification-header-item'], {
      [verificationHeaderItemClassNames['verification-header-item_active']]: isActive,
    });

    return (
      <li className={verificationHeaderItemClassName} onClick={this.onClick}>
        { title }
      </li>
    );
  }
}

VerificationHeaderItem.defaultProps = {
  title: '',
  isActive: false,
  onClick: null,
};

VerificationHeaderItem.propTypes = {
  title: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default VerificationHeaderItem;
