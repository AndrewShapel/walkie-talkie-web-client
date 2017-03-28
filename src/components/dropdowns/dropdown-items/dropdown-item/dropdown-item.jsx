import React from 'react';

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
    const { title } = this.props;

    return (
      <li className={dropdownItemClassNames['dropdown-item']} onClick={this.onClick} >
        {title}
      </li>
    );
  }
}

DropdownItem.defaultProps = {
  title: '',
  onClick: null,
};

DropdownItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default DropdownItem;
