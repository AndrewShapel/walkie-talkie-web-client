import React from 'react';
import classnames from 'classnames';

import dropdownClassNames from '../../../assets/css/blocks/dropdowns/dropdown/dropdown.css';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.toggle = this.toggle.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  toggle() {
    const isOpen = !this.state.isOpen;

    this.setState({
      isOpen,
    });
  }

  /**
   * @param {Object} children
   * @param {Number} index
   */
  renderChildren(children, index) {
    return React.cloneElement(children, {
      onClick: this.toggle,
      key: index,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { className, itemsClassName, children, renderContent } = this.props;

    const dropdownItemsClassName = classnames(dropdownClassNames.dropdown__items, itemsClassName);

    const items = (isOpen)
      ? (
        <div className={dropdownItemsClassName}>
          {renderContent && renderContent()}
        </div>
      )
      : null;

    const dropdownClassName = classnames(dropdownClassNames.dropdown, className);

    return (
      <div className={dropdownClassName}>
        {React.Children.map(children, this.renderChildren)}
        {items}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: '',
  itemsClassName: '',
  children: null,
  renderContent: null,
};

Dropdown.propTypes = {
  className: React.PropTypes.string,
  itemsClassName: React.PropTypes.string,
  children: React.PropTypes.object,
  renderContent: React.PropTypes.func,
};

export default Dropdown;
