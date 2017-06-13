import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uniqueId } from 'lodash';

import { FRIEND_REQUEST_STATUS } from '../../../constants/friends';

import { getFriendRequests, declineFriendRequest, acceptFriendRequest } from '../../../action-types/friends';

import SearchInput from '../../search/search-input/search-input';
import PanelRequestsItem from './panel-requests-item/panel-requests-item';

import panelRequestsClassNames from './panel-requests.css';

/**
 * @param {Object} Users
 * @param {Object} Friends
 * @returns {Object}
 */
const mapStateToProps = ({ Users, Friends }) => ({
  accountEmail: Users.getAccount().getEmail(),
  friendRequests: Friends.getFriendRequests(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendRequestsAction: getFriendRequests,
    declineFriendRequestAction: declineFriendRequest,
    acceptFriendRequestAction: acceptFriendRequest,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelRequests extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
    accountEmail: React.PropTypes.string.isRequired,
    friendRequests: React.PropTypes.object.isRequired,
    getFriendRequestsAction: React.PropTypes.func.isRequired,
    declineFriendRequestAction: React.PropTypes.func.isRequired,
    acceptFriendRequestAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
    itemClassName: '',
    searchInputClassName: '',
  };

  componentWillMount() {
    const { getFriendRequestsAction } = this.props;

    getFriendRequestsAction();
  }

  /**
   * @param {Object} user
   */
  @autobind
  decline(user) {
    const { declineFriendRequestAction } = this.props;

    const email = user.getEmail();
    if (email) {
      declineFriendRequestAction(email);
    }
  }

  /**
   * @param {Object} user
   */
  @autobind
  accept(user) {
    const { acceptFriendRequestAction } = this.props;

    const email = user.getEmail();
    if (email) {
      acceptFriendRequestAction(email);
    }
  }

  /**
   * @param {String} className
   * @param {Object} friendRequests
   */
  @autobind
  renderFriendRequests(className, friendRequests) {
    const { accountEmail } = this.props;

    return friendRequests.filter((friendRequest) => {
      const status = friendRequest.getStatus();
      return status === FRIEND_REQUEST_STATUS.PENDING;
    }).map((friendRequest) => {
      const from = friendRequest.getFrom();
      const email = from.getEmail();

      const isDisabled = email === accountEmail;
      const key = uniqueId('friendRequest_');

      return (
        <PanelRequestsItem
          className={className}
          user={from}
          onDecline={this.decline}
          onAccept={this.accept}
          isDisabled={isDisabled}
          key={key}
        />
      );
    });
  }

  render() {
    const { className, itemClassName, searchInputClassName, friendRequests } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
        />
        <div className={panelRequestsClassNames['panel-requests__requests']}>
          { this.renderFriendRequests(itemClassName, friendRequests) }
        </div>
      </ul>
    );
  }
}
