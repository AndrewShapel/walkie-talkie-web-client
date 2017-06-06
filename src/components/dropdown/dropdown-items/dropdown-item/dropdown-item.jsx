import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import dropdownItemClassNames from './dropdown-item.css';

export default class DropdownItem extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    title: React.PropTypes.string,
    isActive: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    children: null,
    title: '',
    isActive: false,
    onClick: null,
  };

  @autobind
  onClick() {
    const { id, onClick } = this.props;

    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const { className, children, title, isActive } = this.props;

    const dropdownItemClassName = classnames(dropdownItemClassNames['dropdown-item'], {
      [dropdownItemClassNames['dropdown-item_only-text']]: title,
      [dropdownItemClassNames['dropdown-item_active']]: isActive,
    }, className);

    return (
      <li className={dropdownItemClassName} onClick={this.onClick} >
        {title || children}
      </li>
    );
  }
}
