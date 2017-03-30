import React from 'react';
import { Form as FormsyForm } from 'formsy-react';

import formClassNames from '../../assets/css/blocks/form/form.css';

class Form extends React.PureComponent {
  /**
   * @param {Array} errorMessages
   */
  static renderErrorMessages(errorMessages) {
    return errorMessages.map(errorMessage => (
      <span className={formClassNames['form__error-message']}>
        {errorMessage}
      </span>
    ));
  }

  /**
   * @param {Array} children
   */
  static validateChildren(children) {
    children.forEach((child) => {
      if (child && child.validate) {
        child.validate();
      }
    });
  }

  constructor(props) {
    super(props);

    this.children = [];

    this.onMount = this.onMount.bind(this);
    this.onValidSubmit = this.onValidSubmit.bind(this);
    this.onInvalidSubmit = this.onInvalidSubmit.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  /**
   * @param {Object} child
   */
  onMount(child) {
    if (child) {
      this.children.push(child);
    }
  }

  /**
   * @param {Object} model
   */
  onValidSubmit(model) {
    const { onValidSubmit } = this.props;

    const children = this.children;
    if (children && children.length > 0) {
      Form.validateChildren(this.children);
    }

    if (onValidSubmit) {
      onValidSubmit(model);
    }
  }

  onInvalidSubmit() {
    const children = this.children;
    if (children && children.length > 0) {
      Form.validateChildren(children);
    }
  }

  /**
   * @param {Object} children
   * @param {Object} index
   * @return {Object|Null}
   */
  renderChildren(children, index) {
    if (children) {
      return React.cloneElement(children, {
        onMount: this.onMount,
        key: index,
      });
    }

    return null;
  }

  render() {
    const { children, mapping, errorMessages } = this.props;

    return (
      <FormsyForm mapping={mapping} onValidSubmit={this.onValidSubmit} onInvalidSubmit={this.onInvalidSubmit}>
        {Form.renderErrorMessages(errorMessages)}
        {React.Children.map(children, this.renderChildren)}
      </FormsyForm>
    );
  }
}

Form.defaultProps = {
  children: null,
  mapping: null,
  errorMessages: [],
  onValidSubmit: null,
};

Form.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
  mapping: React.PropTypes.func,
  errorMessages: React.PropTypes.array,
  onValidSubmit: React.PropTypes.func,
};

export default Form;