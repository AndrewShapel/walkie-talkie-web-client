import React from 'react';
import autobind from 'autobind-decorator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { uniqueId } from 'lodash';

import { getFriends } from '../../../action-types/users';

import SearchInput from '../../search/search-input/search-input';
import PanelFriendsItem from './panel-friends-item/panel-friends-item';

/**
 * @param {Object} Users
 * @returns {Object}
 */
const mapStateToProps = ({ Users }) => ({
  friends: Users.getFriends(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFriendsAction: getFriends,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelFriends extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    searchInputClassName: React.PropTypes.string,
    friends: React.PropTypes.object.isRequired,
    getFriendsAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
    searchInputClassName: '',
  };

  /**
   * @param {Object} friends
   * @returns {Object}
   */
  static renderFriends(friends) {
    return friends.map(() => {
      const key = uniqueId('friend_');
      return <PanelFriendsItem key={key} />;
    });
  }

  componentWillMount() {
    const { getFriendsAction } = this.props;

    getFriendsAction();
  }

  /**
   * @param {String} filter
   */
  @autobind
  filterFriends(filter) {
    console.log(this, filter);
  }

  render() {
    const { className, searchInputClassName, friends } = this.props;

    return (
      <ul className={className}>
        <SearchInput
          className={searchInputClassName}
          delay={300}
          onChange={this.filterFriends}
        />
        { PanelFriends.renderFriends(friends) }
      </ul>
    );
  }
}
