import React from 'react';
import {  mount } from 'enzyme';
import Header from '../components/Header/Header';

describe('<App /> has correct contents', () => {
  const container = mount(<Header />);

  it('should have logo img', () => {
    expect(container.find('img.App-logo').length).toEqual(1);
  });

});