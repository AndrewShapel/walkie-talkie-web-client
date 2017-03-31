import React from 'react';
import classnames from 'classnames';

import Dom from '../../../utils/dom';

import dropdownClassNames from '../../../assets/css/blocks/dropdown/dropdown/dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.eventListener = null;

    this.toggle = this.toggle.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

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

  toggle() {
    const { isOpen, onToggle } = this.state;

    if (onToggle) {
      onToggle(!isOpen);
    }
  }

  /**
   * @param {Object} children
   * @param {Number} index
   * @returns {Object|Null}
   */
  renderChildren(children, index) {
    if (children) {
      return React.cloneElement(children, {
        onClick: this.toggle,
        key: index,
      });
    }

    return null;
  }

  /**
   * @param {Object} items
   * @returns {Object|Null}
   */
  renderItems(items) {
    if (items) {
      return React.cloneElement(items, {
        ref: (node) => {
          this.dropdown = node;
        },
      });
    }

    return null;
  }

  render() {
    const { className, itemsClassName, children, isOpen, renderContent } = this.props;

    const dropdownItemsClassName = classnames(dropdownClassNames.dropdown__items, itemsClassName);
    const dropdownClassName = classnames(dropdownClassNames.dropdown, className);

    const items = (isOpen)
      ? (
        <div className={dropdownItemsClassName}>
          {renderContent && renderContent()}
        </div>
      )
      : null;

    return (
      <div className={dropdownClassName}>
        {React.Children.map(children, this.renderChildren)}
        {this.renderItems(items)}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: '',
  itemsClassName: '',
  children: null,
  isOpen: false,
  renderContent: null,
  onToggle: null,
};

Dropdown.propTypes = {
  className: React.PropTypes.string,
  itemsClassName: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
  isOpen: React.PropTypes.bool,
  renderContent: React.PropTypes.func,
  onToggle: React.PropTypes.func,
};

export default Dropdown;
