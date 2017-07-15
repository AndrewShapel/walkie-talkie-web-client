import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActive } from '../../../action-types/tabs';

import { TABS } from '../../../constants/tabs';

import PanelTabsItem from './panel-tabs-item/panel-tabs-item';

import panelTabsClassNames from './panel-tabs.css';

/**
 * @param {Object} Tabs
 * @returns {Object}
 */
const mapStateToProps = ({ Tabs }) => ({
  activeTab: Tabs.getActiveTab(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setActiveTabAction: setActive,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class PanelTabs extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    activeTab: React.PropTypes.string,
    setActiveTabAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
    activeTab: '',
  };

  /**
   * @param {String} id
   */
  @autobind
  onActiveTabSelect(id) {
    const { activeTab, setActiveTabAction } = this.props;

    if (id !== activeTab) {
      setActiveTabAction(id);
    }
  }

  render() {
    const { className, activeTab } = this.props;

    const isFriendsTabActive = activeTab === TABS.FRIENDS;
    const isRequestsTabActive = activeTab === TABS.REQUESTS;

    const tabsClassName = classnames(panelTabsClassNames['panel-tabs'], className);

    return (
      <ul className={tabsClassName}>
        <PanelTabsItem
          title="Friends"
          id={TABS.FRIENDS}
          isActive={isFriendsTabActive}
          onClick={this.onActiveTabSelect}
        />
        <PanelTabsItem
          title="Requests"
          id={TABS.REQUESTS}
          isActive={isRequestsTabActive}
          onClick={this.onActiveTabSelect}
        />
      </ul>
    );
  }
}
