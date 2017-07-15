import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';

import Dom from '../../../utils/dom';

import dropdownClassNames from './dropdown.css';

export default class Dropdown extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    itemsClassName: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    isStickToBottom: React.PropTypes.bool,
    isOpen: React.PropTypes.bool,
    renderContent: React.PropTypes.func,
    onToggle: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    itemsClassName: '',
    children: null,
    isOpen: false,
    isStickToBottom: false,
    renderContent: null,
    onToggle: null,
  };

  componentWillMount() {
    const { onToggle } = this.props;

    if (!this.eventListener) {
      this.eventListener = (event) => {
        const dropdown = this.dropdown;
        if (dropdown && !Dom.isDescendant(dropdown, event.target) && onToggle) {
          if (onToggle) {
            onToggle(false);
          }
        }
      };

      document.addEventListener('click', this.eventListener);
    }
  }

  componentWillUnmount() {
    if (this.eventListener) {
      document.removeEventListener('click', this.eventListener);
    }
  }

  /**
   * @type {Object|Null}
   */
  eventListener = null;

  @autobind
  toggle() {
    const { isOpen, onToggle } = this.props;

    if (onToggle) {
      onToggle(!isOpen);
    }
  }

  /**
   * @param {Object} children
   * @param {Number} index
   * @returns {Object|Null}
   */
  @autobind
  renderChildren(children, index) {
    if (children) {
      return React.cloneElement(children, {
        onClick: this.toggle,
        key: index,
      });
    }

    return null;
  }

  render() {
    const { className, itemsClassName, children, isStickToBottom, isOpen, renderContent } = this.props;

    const dropdownItemsClassName = classnames(dropdownClassNames.dropdown__items, {
      [dropdownClassNames['dropdown__items_stick-to-bottom']]: isStickToBottom,
    }, itemsClassName);
    const dropdownClassName = classnames(dropdownClassNames.dropdown, className);

    const items = (isOpen)
      ? (
        <div className={dropdownItemsClassName}>
          {renderContent && renderContent()}
        </div>
      )
      : null;

    return (
      <div className={dropdownClassName} ref={(node) => { this.dropdown = node; }}>
        {React.Children.map(children, this.renderChildren)}
        {items}
      </div>
    );
  }
}
