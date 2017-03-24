import React from 'react';

const Svg = ({ className, path }) => (
  <object className={className} data={path} type="image/svg+xml" />
);

Svg.defaultProps = {
  className: '',
  path: '',
};

Svg.propTypes = {
  className: React.PropTypes.string,
  path: React.PropTypes.string,
};

export default Svg;
