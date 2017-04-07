import React from 'react';
import classnames from 'classnames';

import PanelHeader from './panel-header/panel-header';
import PanelContent from './panel-content/panel-content';

import panelClassNames from './panel.css';

const Panel = ({ className }) => {
  const panelClassName = classnames(panelClassNames.panel, className);

  return (
    <div className={panelClassName}>
      <PanelHeader />
      <PanelContent />
    </div>
  );
};

Panel.defaultProps = {
  className: '',
};

Panel.propTypes = {
  className: React.PropTypes.string,
};

export default Panel;

