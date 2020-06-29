import React from 'react';
import { shallow } from 'enzyme';
import StarsUI from '../client/src/components/StarsUI.jsx';

describe('<StarsUI />', () => {

  it('should render the correct starfill according to the passed in rating', () => {
    let rating = 4;
    let fill = rating / 5 * 100 + '%';

    const wrapper = shallow(<StarsUI rating={rating} />);

    expect(wrapper.equals(
      <div className="StarsUI">
        <span className="fill" style={{width: fill}}></span>
      </div>
    )).toBe(true);
  });

});