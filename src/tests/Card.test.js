import React from 'react';
import {  mount } from 'enzyme';
import Card from '../components/Card/Card';

const initialProps = {
  category: 'Hireable rooms',
  heading: 'Anything room at Green Square Library',
  location: 'Zetland',
  // image: '/assets/placeholder.jpg'
}

describe('<Card /> has correct contents', () => {
  const container = mount(<Card {...initialProps} />);

  it('should have no <img/>', () => {
    expect(container.find('img').length).toEqual(0);
  });

  it('should have a <h1></h1>', () => {
    expect(container.find('h1').length).toEqual(1);
  });

  it('should have two <p></p>', () => {
    expect(container.find('p').length).toEqual(2);
  });

});

describe('<Card /> add image when available', () => {
  initialProps.image = '/assets/placeholder.jpg';
  const container = mount(<Card {...initialProps} />);

  const containerWithImg = mount(<Card {...initialProps} />);

  it('should have a <img/>', () => {
    expect(containerWithImg.find('img').length).toEqual(1);
  });

});