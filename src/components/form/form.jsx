import React from 'react';
import { Form as FormsyForm } from 'formsy-react';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * @param {Object} model
   */
  onSubmit(model) {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(model);
    }
  }

  render() {
    const { children, mapping } = this.props;

    return (
      <FormsyForm mapping={mapping} onSubmit={this.onSubmit}>
        {children}
      </FormsyForm>
    );
  }
}

Form.defaultProps = {
  children: null,
  mapping: null,
  onSubmit: null,
};

Form.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
  mapping: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};

export default Form;
