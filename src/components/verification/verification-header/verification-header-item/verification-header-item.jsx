import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import routes from '../../../../constants/routes/routes';

import verificationHeaderItemClassNames from '../../../../assets/css/blocks/verification/verification-header/verification-header-item/verification-header-item.css';

class VerificationHeaderItem extends React.PureComponent {

  static propTypes = {
    title: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    match: React.PropTypes.object,
  }

  static defaultProps = {
    title: '',
    isActive: false,
    onClick: null,
    match: {},
  }

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
    const { title, isActive, match } = this.props;

    const verificationHeaderItemClassName = classnames(verificationHeaderItemClassNames['verification-header-item'], {
      [verificationHeaderItemClassNames['verification-header-item_active']]: isActive,
    });

    return (
      <li className={verificationHeaderItemClassName} onClick={this.onClick}>
        <Link to={`${match.path}${routes.userVerification.url.signin}`} />
        { title }
      </li>
    );
  }
}

export default VerificationHeaderItem;
