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

@connect(mapStateToProps, null)
export default class Permit extends React.PureComponent {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    permission: React.PropTypes.string.isRequired,
    accountPermission: React.PropTypes.string.isRequired,
    isRedirect: React.PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    isRedirect: false,
  };

  /**
   * @param {String} currentPermission
   * @param {String} requiredPermission
   * @returns {Boolean}
   */
  static isAllow(currentPermission, requiredPermission) {
    return currentPermission === requiredPermission || currentPermission === USER_PERMISSION.ADVANCED;
  }

  componentWillMount() {
    const { permission, accountPermission, isRedirect } = this.props;

    if (!Permit.isAllow(accountPermission, permission) && isRedirect) {
      console.log('tr');
    }
  }

  render() {
    const { children, permission, accountPermission } = this.props;

    return Permit.isAllow(accountPermission, permission)
      ? children
      : null;
  }
}
