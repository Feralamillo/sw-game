import React from 'react';
import axios from 'axios';

import SWGame from '../components/sw-game';
import { CardData } from '../core/types';
import { getRandomIntInclusive, transformPeopleAPIData, findWinner } from '../utils/utils';

export interface State {
  cardData: Array<CardData | null> | undefined;
  resource: string | undefined;
  points: number | undefined;
  winner: string | undefined;
}
/**
 * Handles the API Call
 */
class SWContainer extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      cardData: undefined,
      resource: undefined,
      points: undefined,
      winner: undefined
    };
  }

  public render() {
    const { cardData, resource, winner } = this.state;

    return (
      <div className="container h-100 sw-background">
        <SWGame 
          selectGame={this.selectGame}
          resource={resource}
          cardData={cardData} 
          triggerButton={this.triggerButton}
          winner={winner}
        />
      </div>
    );
  }

  private triggerButton = () => {
    this.setState({
      cardData: [null, null],
    })
    this.handleGame()
  }

  private selectGame = (resource: string, points: number) => {
    this.setState({
      resource, 
      points
    })
  }

  private handleGame = async () => {
    const { resource } = this.state;
    if(!resource) {
      return;
    }
    // This should go in utils functions
    const num1 = getRandomIntInclusive(1, 87);
    let num2 = getRandomIntInclusive(1, 87);

    while (num1 === num2) {
      num2 = getRandomIntInclusive(1, 87);
    }

    const response = await Promise.all([
      this.handleAPICall(resource, num1),
      this.handleAPICall(resource, num2)
    ]);
    // @TODO: What happens if we receive null??
    const cardData = response.map((res) => res as CardData );
    const winner = findWinner(cardData);
    setTimeout(() => {
      this.setState({
        cardData,
        winner
      })
    }, 2000);
  }

  private handleAPICall = async (resource: string, num: number): Promise<CardData | null> => {
    try {
      const response = await axios.get(`https://swapi.co/api/${resource}/${num}/`);
      return transformPeopleAPIData(resource, response.data); 
    } catch (error) {
      console.log(`Error while fetching: ${error}`)
      return null
    }
  }
}

export default SWContainer;