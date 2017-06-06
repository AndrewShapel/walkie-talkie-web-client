import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFriendRequests } from '../../../action-types/friends';

import SearchInput from '../../search/search-input/search-input';
import PanelRequestsItem from './panel-requests-item/panel-requests-item';

/**
 * @param {Object} Friends
 * @returns {Object}
 */
const mapStateToProps = ({ Friends }) => ({
  friends: Friends.getFriends(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendRequestsAction: getFriendRequests,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelRequests extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
    friends: React.PropTypes.object.isRequired,
    getFriendRequestsAction: React.PropTypes.func.isRequired,
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

  render() {
    const { className, itemClassName, searchInputClassName, friends } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
        />
        <PanelRequestsItem
          className={itemClassName}
        />
      </ul>
    );
  }
}
