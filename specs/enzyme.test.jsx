/* eslint-disable */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Listing from '../client/src/components/Listing.jsx';
import Place from '../client/src/components/Place.jsx';
import mockData from '../mockData.js';

describe('<Listing />', () => {

  test('mounting a <Listing />', () => {
    const testComponent = TestRenderer.create(
      <Listing />
    );

    let tree = testComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  const wrapper = mount(<Listing />);

  test('should not render <Place /> with no data', () => {
    expect(wrapper.find(Place)).toHaveLength(0);
  })

  test('should render <Place /> with data', () => {
    wrapper.setState({listing: mockData[0]});
    expect(wrapper.find(Place)).toHaveLength(12);
  })

  test('should contain ul', () => {
    wrapper.setState({listing: mockData[0]});
    expect(wrapper.exists('ul')).toBeTruthy();
  })
})

describe('<Place />', () => {

  const wrapper = mount(<Place />);
  wrapper.setState({place: mockData[0].morePlacesID[0]});

  test('should contain li', () => {
    expect(wrapper.exists('li')).toBeTruthy();
  })

  test('should contain ol', () => {
    expect(wrapper.exists('ol')).toBeTruthy();
  })
});
