import React from 'react';
import {  mount } from 'enzyme';
import App from '../App';

import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

describe('<App /> has correct contents', () => {
  const container = mount(<App />);

  it('should have a <Header />', () => {
    expect(container.find(Header).length).toEqual(1);
  });

  it('should have six <Card />', () => {
    expect(container.find(Card).length).toEqual(6);
  });

});