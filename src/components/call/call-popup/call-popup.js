import React from 'react';
import classnames from 'classnames';

import Button from '../../button/button';

import callPopupClassNames from './call-popup.css';

export default class CallPopup extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    const callPopupClassName = classnames(callPopupClassNames['call-popup'], className);

    if (true) {
      return null;
    }

    return (
      <div className={callPopupClassName}>
        <span className={callPopupClassNames['call-popup__title']}>
          Andrew Shapel calling...
        </span>
        <div className={callPopupClassNames['call-popup__buttons']}>
          <Button title="Accept" className={callPopupClassNames['call-popup__button']} />
          <Button title="Decline" className={callPopupClassNames['call-popup__button']} />
        </div>
      </div>
    );
  }
}
