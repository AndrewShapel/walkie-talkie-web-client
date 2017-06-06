import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uniqueId } from 'lodash';

import { getFriendRequests, declineFriendRequest, acceptFriendRequest } from '../../../action-types/friends';

import SearchInput from '../../search/search-input/search-input';
import PanelRequestsItem from './panel-requests-item/panel-requests-item';

/**
 * @param {Object} Friends
 * @returns {Object}
 */
const mapStateToProps = ({ Friends }) => ({
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
  block(user) {
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
    return friendRequests.map((friendRequest) => {
      const from = friendRequest.getFrom();
      const key = uniqueId('friendRequest_');
      return (
        <PanelRequestsItem
          className={className}
          user={from}
          onBlock={this.block}
          onAccept={this.accept}
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
        { this.renderFriendRequests(itemClassName, friendRequests) }
      </ul>
    );
  }
}
