import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../client/src/components/Reviews.jsx';

describe('<Reviews />', () =>{

  it('should render the reviews header', () => {
    let wrapper = shallow(<Reviews />);
    const h3 = wrapper.find('h3');
    let result = h3.text();

    expect(result).toBe('ALO FAM REVIEWS');
  });

});