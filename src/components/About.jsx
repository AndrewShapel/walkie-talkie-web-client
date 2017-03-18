import React from 'react';

const About = ({ name = 'world' }) => (
  <h2 className="about">About {name} page</h2>
);

About.defaultProps = {
  name: 'world',
};

About.propTypes = {
  name: React.PropTypes.string,
};

export default About;
