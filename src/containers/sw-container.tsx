import React from 'react';
import axios from 'axios';

import SWGame from '../components/sw-game';
import { cardData } from '../core/types';
import { getRandomIntInclusive } from '../utils/utils';

export interface State {
  cardData: Array<cardData> | undefined;
  loading: boolean;
}
/**
 * Handles the API Call
 */
class SWContainer extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      cardData: undefined,
      loading: false
    };
  }

  public render() {
    const { cardData, loading } = this.state;

    return (
      <div className="container h-100">
        <SWGame 
          cardData={cardData} 
          triggerButton={this.triggerButton}
          loading={loading}
        />
      </div>
    );
  }

  private triggerButton = () => {
    this.setState({
      cardData: undefined,
      loading: true
    })
    this.handleAPICall()
  }

  private handleAPICall = async () => {
    // This should go in utils functions
    const num1 = getRandomIntInclusive(1, 87);
    let num2 = getRandomIntInclusive(1, 87);

    while (num1 === num2) {
      num2 = getRandomIntInclusive(1, 87);
    }

    try {
      const response = await Promise.all([
        axios.get(`https://swapi.co/api/people/${num1}/`),
        axios.get(`https://swapi.co/api/people/${num2}/`)
      ]);
      setTimeout(() => {
        this.setState({
          cardData: response.map((res) => res.data),
          loading: false
        })
      }, 2000);
    } catch {
      this.setState({
        cardData: undefined
      });
    }

  }
}

export default SWContainer;