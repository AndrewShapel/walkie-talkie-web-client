import React from 'react';
import { render } from 'enzyme';

import About from '../../containers/about';

describe('About component', () => {
  it('render to static HTML', () => {
    expect(render(<About />).text()).toEqual('About world page');
  });
});
