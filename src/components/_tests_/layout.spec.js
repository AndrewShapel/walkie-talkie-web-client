import React from 'react';
import { shallow, mount } from 'enzyme';

import Layout from '../Layout';

describe('Layout component', () => {
  it('selectable by class "main"', () => {
    expect(shallow(<Layout />).is('.main')).toBe(true);
  });

  it('mount in a full DOM', () => {
    expect(mount(<Layout />).find('.main').length).toBe(1);
  });
});
