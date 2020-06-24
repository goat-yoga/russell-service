import React from 'react';
import { shallow, mount } from 'enzyme';
import Pagination from '../client/src/components/Pagination.jsx';
import Reviews from '../client/src/components/Reviews.jsx';

describe('<Pagination />', () => {
  let reviewsPerPage = 5;
  let totalReviews = 14;
  let changePage = Reviews.changePage;
  let selectPage = Reviews.selectPage;

  let wrapper = mount(
    <Pagination
      reviewsPerPage={reviewsPerPage}
      totalReviews={totalReviews}
      changePage={changePage}
      selectPage={selectPage}
      currentPage={1}
    />);

  it('should render a left button and right button', () => {
    let leftButtonExists = wrapper.exists('.option.left');
    let rightButtonExists = wrapper.exists('.option.right');

    expect(leftButtonExists).toBe(true);
    expect(rightButtonExists).toBe(true);
  });

  it('should render the correct amount of page buttons', () => {
    let result = wrapper.find('button.option');

    expect(result).toHaveLength(5);
  });

});