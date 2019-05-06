import React from 'react';
import { shallow } from 'enzyme';

import { SWFilters, Props } from '../sw-filters';

const props: Props = {
  selectGame: jest.fn()
};

describe('<SWFilters />', () => {
  it('should render the component', () => {
    const component = shallow(<SWFilters {...props} />);

    expect(component).toMatchSnapshot()
  });
});