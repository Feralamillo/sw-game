import { shallow } from 'enzyme';
import React from 'react';

import { SWGame, Props } from '../sw-game';
import { MOCK_CARD } from '../../__mocks__/mock-data';
import { RESOURCES } from '../../core/constants';

const props: Props = {
  cardData: [MOCK_CARD],
  triggerButton: jest.fn(),
  selectGame: jest.fn(),
  resource: RESOURCES.PEOPLE,
  winner: MOCK_CARD.name,
  score: [1, 0],
  points: 1
}

describe('<SWGame />', () => {
  it('should render the component', () => {
    const component = shallow(<SWGame {...props} />);

    expect(component).toMatchSnapshot()
  });
});