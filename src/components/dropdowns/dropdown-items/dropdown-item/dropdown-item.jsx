import React from 'react';
import classnames from 'classnames';

import dropdownItemClassNames from '../../../../assets/css/blocks/dropdowns/dropdown-items/dropdown-item/dropdown-item.css';

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
    const { children, title } = this.props;

    const dropdownItemClassName = classnames(dropdownItemClassNames['dropdown-item'], {
      [dropdownItemClassNames['dropdown-item_only-text']]: title,
    });

    return (
      <li className={dropdownItemClassName} onClick={this.onClick} >
        {title || children}
      </li>
    );
  }
}

DropdownItem.defaultProps = {
  children: [],
  title: '',
  onClick: null,
};

DropdownItem.propTypes = {
  children: React.PropTypes.array,
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default DropdownItem;
