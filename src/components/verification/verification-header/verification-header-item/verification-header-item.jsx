import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import verificationHeaderItemClassNames from './verification-header-item.css';

export default class VerificationHeaderItem extends React.PureComponent {

  static propTypes = {
    match: React.PropTypes.object,
    title: React.PropTypes.string,
    path: React.PropTypes.string,
  };

  static defaultProps = {
    match: {},
    title: '',
    path: '',
  };

  render() {
    const { match, title, path } = this.props;

    const verificationHeaderItemClassName = classnames(verificationHeaderItemClassNames['verification-header-item']);

    return (
      <li className={verificationHeaderItemClassName}>
        <NavLink
          className={verificationHeaderItemClassNames['verification-header-item__text']}
          activeClassName={verificationHeaderItemClassNames['verification-header-item_active']}
          to={`${match.path}${path}`}
        >
          { title }
        </NavLink>
      </li>
    );
  }
}
