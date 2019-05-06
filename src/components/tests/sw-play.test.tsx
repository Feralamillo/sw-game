import { shallow } from 'enzyme';
import React from 'react';

import SWPlay from '../sw-play';

const props = {
  triggerButton: jest.fn()
}

describe('<SWPlay />', () => {
  it('should render the component', () => {
    const component = shallow(<SWPlay {...props} />);

    expect(component).toMatchSnapshot()
  });
});