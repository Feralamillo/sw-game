import React from 'react';
import axios from 'axios';

import SWGame from '../components/sw-game';
import { cardData } from '../core/types';
import { getRandomIntInclusive } from '../utils/utils';

export interface State {
  cardData: Array<cardData> | null;
}
/**
 * Handles the API Call
 */
class SWContainer extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      cardData: null
    };
  }
  
  public componentDidMount() {
    this.handleAPICall();
  }

  public render() {
    const { cardData } = this.state;

    if (!cardData) {
      return (
        <div className="container h-100">
          Sorry, we have an error...
        </div>
      )
    }

    return (
      <div className="container h-100">
        StaryContainer
        <SWGame cardData={cardData} />
      </div>
    );
  }

  private handleAPICall = async () => {

    // constrain with a min and max number.
    // ensure not getting the same number.
    // This should go in utils functions
    const num1 = getRandomIntInclusive(1, 87);
    let num2 = getRandomIntInclusive(1, 87);

    while (num1 === num2) {
      num2 = getRandomIntInclusive(1, 87);
    }
    // until here

    try {
      // Fire a Promise.All to get the 2 request
      const response = await Promise.all([
        axios.get(`https://swapi.co/api/people/${num1}/`),
        axios.get(`https://swapi.co/api/people/${num2}/`),

      ]);
      this.setState({
        cardData: response.map((res) => res.data)
      });
    } catch {
      this.setState({
        cardData: null
      });
    }

  }
}

export default SWContainer;