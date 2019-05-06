import React from 'react';
import { shallow } from 'enzyme';

import { SWCard, Props } from '../sw-card';
import { MOCK_CARD } from '../../__mocks__/mock-data';

const props: Props = {
  cardData: MOCK_CARD,
  index: 1,
  score: 1,
  points: 2
};

describe('<SWCard />', () => {
  it('should render the component', () => {
    const component = shallow(<SWCard {...props} />);

    expect(component).toMatchSnapshot()
  });
});