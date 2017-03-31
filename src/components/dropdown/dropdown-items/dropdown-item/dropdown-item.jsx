import React from 'react';
import classnames from 'classnames';

import dropdownItemClassNames from '../../../../assets/css/blocks/dropdown/dropdown-items/dropdown-item/dropdown-item.css';

class DropdownItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

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

DropdownItem.defaultProps = {
  className: '',
  children: null,
  title: '',
  isActive: false,
  onClick: null,
};

DropdownItem.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.object,
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default DropdownItem;
