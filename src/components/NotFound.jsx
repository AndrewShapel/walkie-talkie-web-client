import React from 'react';

const NotFound = ({ name = 'Test' }) => (
  <h2 className="about">Sorry, {name} page not found</h2>
);

NotFound.defaultProps = {
  name: 'world',
};

NotFound.propTypes = {
  name: React.PropTypes.string,
};

export default NotFound;
