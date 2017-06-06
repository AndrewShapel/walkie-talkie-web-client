import React from 'react';
import classnames from 'classnames';

import PanelHeader from './panel-header/panel-header';
import PanelContent from './panel-content/panel-content';

import panelClassNames from './panel.css';

export default class Panel extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    const panelClassName = classnames(panelClassNames.panel, className);

    return (
      <div className={panelClassName}>
        <PanelHeader />
        <PanelContent />
      </div>
    );
  }
}
