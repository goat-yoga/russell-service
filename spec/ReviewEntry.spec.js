import React from 'react';
import { shallow, mount } from 'enzyme';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx';

describe('<ReviewEntry />', () => {

  it('should render a review entry with passed in props', () => {
    let review = {
      rating: 4,
      title: 'These leggings are perfect!',
      body: 'They fit perfectly and are very comfortable',
      name: 'Russell'
    };

    const wrapper = shallow(<ReviewEntry review={review} />);

    const title = wrapper.find('.title').text();
    const body = wrapper.find('.SeeMore.small-p.body').text();
    const name = wrapper.find('.name').text();

    expect(title).toBe('These leggings are perfect!');
    expect(body).toBe('They fit perfectly and are very comfortable');
    expect(name).toBe('Russell');
  });

});