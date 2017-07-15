import React from 'react';

import { connect } from 'react-redux';

import { TABS } from '../../../constants/tabs';

import PanelTabs from '../panel-tabs/panel-tabs';
import PanelFriends from '../panel-friends/panel-friends';
import PanelRequests from '../panel-requests/panel-requests';

import panelContentClassNames from './panel-content.css';

/**
 * @param {Object} Tabs
 * @returns {Object}
 */
const mapStateToProps = ({ Tabs }) => ({
  activeTab: Tabs.getActiveTab(),
});

@connect(mapStateToProps)
export default class PanelContent extends React.PureComponent {

  static propTypes = {
    activeTab: React.PropTypes.string,
  };

  static defaultProps = {
    activeTab: '',
  };

  /**
   * @param {String} activeTab
   * @returns {Object}
   */
  static renderContent(activeTab) {
    switch (activeTab) {
      case TABS.FRIENDS:
        return (
          <PanelFriends
            className={panelContentClassNames['panel-content__content']}
            itemClassName={panelContentClassNames['panel-content__item']}
            searchInputClassName={panelContentClassNames['panel-content__search-input']}
          />
        );
      case TABS.REQUESTS:
        return (
          <PanelRequests
            className={panelContentClassNames['panel-content__content']}
            itemClassName={panelContentClassNames['panel-content__item']}
            searchInputClassName={panelContentClassNames['panel-content__search-input']}
          />
        );
      case TABS.ROOMS:
        return null;
      default:
        return null;
    }
  }

  render() {
    const { activeTab } = this.props;

    return (
      <div className={panelContentClassNames['panel-content']}>
        <PanelTabs className={panelContentClassNames['panel-content__tabs']} />
        {PanelContent.renderContent(activeTab)}
      </div>
    );
  }
}
