import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICONS } from '../../../constants/icons';

import { signOut } from '../../../action-types/users';
import { makeFriendRequest } from '../../../action-types/friends';

import User from '../../user/user';
import Svg from '../../svg/svg';
import DropdownSearchUser from '../../dropdown/dropdown-search-user/dropdown-search-user';
import DropdownSettings from '../../dropdown/dropdown-settings/dropdown-settings';

import panelHeaderClassNames from './panel-header.css';

/**
 * @param {Object} Users
 * @returns {Object}
 */
const mapStateToProps = ({ Users }) => ({
  account: Users.getAccount(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    signOutAction: signOut,
    makeFriendRequestAction: makeFriendRequest,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelHeader extends React.Component {

  static propTypes = {
    account: React.PropTypes.object.isRequired,
    signOutAction: React.PropTypes.func.isRequired,
    makeFriendRequestAction: React.PropTypes.func.isRequired,
  };

  /**
   * @param {String} userEmail
   */
  @autobind
  onUserSelect(userEmail) {
    const { makeFriendRequestAction } = this.props;

    makeFriendRequestAction(userEmail);
  }

  @autobind
  logOut() {
    const { signOutAction } = this.props;

    signOutAction();
  }

  render() {
    const { account } = this.props;

    return (
      <div className={panelHeaderClassNames['panel-header']}>
        <User
          className={panelHeaderClassNames['panel-header__user']}
          userNameClassName={panelHeaderClassNames['panel-header__user-name']}
          userStatusClassName={panelHeaderClassNames['panel-header__user-status']}
          user={account}
        />
        <div className={panelHeaderClassNames['panel-header__icons']}>
          <DropdownSearchUser
            itemsClassName={panelHeaderClassNames['panel-header__dropdown-items']}
            onSelect={this.onUserSelect}
          >
            <div className={panelHeaderClassNames['panel-header__icon']}>
              <Svg icon={ICONS.USER_PLUS} />
            </div>
          </DropdownSearchUser>
          <DropdownSettings>
            <div>
              <Svg className={panelHeaderClassNames['panel-header__icon']} icon={ICONS.COG} />
            </div>
          </DropdownSettings>
          <Svg
            className={panelHeaderClassNames['panel-header__icon']}
            icon={ICONS.EXIT}
            onClick={this.logOut}
          />
        </div>
      </div>
    );
  }
}
