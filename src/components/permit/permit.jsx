import React from 'react';

import { connect } from 'react-redux';

import { USER_PERMISSION } from '../../constants/user';

/**
 * @param {Object} Users
 * @returns {Object}
 */
const mapStateToProps = ({ Users }) => ({
  accountPermission: Users.getAccount().getPermission(),
});

@connect(mapStateToProps)
export default class Permit extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    permission: React.PropTypes.string,
    history: React.PropTypes.object,
    redirectTo: React.PropTypes.string,
    accountPermission: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    children: null,
    permission: USER_PERMISSION.VIEW_ONLY,
    history: {},
    redirectTo: '',
    accountPermission: '',
  };

  /**
   * @param {String} permission
   * @param {String} accountPermission
   * @returns {Boolean}
   */
  static isAllow(permission, accountPermission) {
    const isPermissionHigher = accountPermission === USER_PERMISSION.BASIC && permission === USER_PERMISSION.VIEW_ONLY;
    const isPermissionAdvanced = accountPermission === USER_PERMISSION.ADVANCED;

    return accountPermission === permission || isPermissionHigher || isPermissionAdvanced;
  }

  render() {
    const { className, children, history, permission, accountPermission, redirectTo } = this.props;

    const isAllow = Permit.isAllow(permission, accountPermission);
    if (!isAllow && history && redirectTo) {
      history.replace(redirectTo);
    }

    return isAllow
      ? <div className={className}>{ children }</div>
      : null;
  }
}
