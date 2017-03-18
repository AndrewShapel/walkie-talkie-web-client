import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import Content from '../Content';

describe('Content component', () => {
  it('mount in a full DOM', () => {
    expect(mount(<Router><Content /></Router>).find('.main').length).toBe(1);
  });
});
