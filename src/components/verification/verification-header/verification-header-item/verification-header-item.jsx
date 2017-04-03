import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import verificationHeaderItemClassNames from '../../../../assets/css/blocks/verification/verification-header/verification-header-item/verification-header-item.css';

export default class VerificationHeaderItem extends React.PureComponent {

  static propTypes = {
    title: React.PropTypes.string,
    match: React.PropTypes.object,
    path: React.PropTypes.string,
  }

  static defaultProps = {
    match: {},
    path: '',
    title: '',
  }

  render() {
    const { title, match, path } = this.props;

    const verificationHeaderItemClassName = classnames(verificationHeaderItemClassNames['verification-header-item']);

    return (
      <li className={verificationHeaderItemClassName}>
        <NavLink to={`${match.path}${path}`} style={{ textDecoration: 'none' }} activeClassName={verificationHeaderItemClassNames['verification-header-item_active']} >
          { title }
        </NavLink>
      </li>
    );
  }
}
