import React from 'react';

class Svg extends React.PureComponent {
  componentDidMount() {
    const { icon } = this.props;

    const svg = this.svg;
    if (svg && icon) {
      svg.innerHTML = icon;

      this.forceUpdate();
    }
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} ref={(node) => { this.svg = node; }} />
    );
  }
}

Svg.defaultProps = {
  className: '',
  icon: '',
};

Svg.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
};

export default Svg;
