import React from 'react';
import { shallow } from 'enzyme';

import { MOCK_CARD } from '../../__mocks__/mock-data';
import { SWBoard, Props } from '../sw-board';
import { RESOURCES } from '../../core/constants';

const props: Props = {
  cardData: [MOCK_CARD],
  resource: RESOURCES.PEOPLE,
  score: [1],
  points: 2
};

describe('<SWBoard />', () => {
  it('should render the component', () => {
    const component = shallow(<SWBoard {...props} />);

    expect(component).toMatchSnapshot()
  });
});