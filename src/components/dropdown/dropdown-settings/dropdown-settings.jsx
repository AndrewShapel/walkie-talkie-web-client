import React from 'react';
import autobind from 'autobind-decorator';

import Dropdown from '../dropdown/dropdown';
import Profile from '../../profile/profile';

import dropdownSettingsClassNames from './dropdown-settins.css';

export default class DropdownSettings extends React.Component {

  static propTypes = Object.assign(Dropdown.propTypes);

  static defaultProps = Object.assign(Dropdown.defaultProps);

  static renderContent() {
    return (
      <div className={dropdownSettingsClassNames['dropdown-settings__content']}>
        <Profile />
      </div>
    );
  }

  state = {
    isOpen: false,
  };

  /**
   * @param {Boolean} isDropdownOpen
   */
  @autobind
  onToggle(isDropdownOpen) {
    const { isOpen } = this.state;

    if (isDropdownOpen !== isOpen) {
      this.setState({
        isOpen: isDropdownOpen,
      });
    }
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Dropdown
          itemsClassName={dropdownSettingsClassNames['dropdown-settings']}
          isOpen={isOpen}
          renderContent={DropdownSettings.renderContent}
          onToggle={this.onToggle}
        >
          {children}
        </Dropdown>
      </div>
    );
  }
}
