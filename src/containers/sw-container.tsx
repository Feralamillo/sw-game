import React from 'react';
import axios from 'axios';

import SWGame from '../components/sw-game';
import { CardData } from '../core/types';
import { getRandomIntInclusive, transformAPIData } from '../utils/utils';

export interface State {
  cardData?: Array<CardData | null>;
  resource?: string;
  points: number;
  winner?: string;
  score: Array<number>;
  maxNumAPI: number;
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
      points: 0,
      winner: undefined,
      score: [0, 0],
      maxNumAPI: 2
    };
  }

  public render() {
    const { cardData, resource, winner, score, points } = this.state;
    console.log(score);

    return (
      <div className="container h-100 sw-background">
        <SWGame 
          selectGame={this.selectGame}
          resource={resource}
          cardData={cardData} 
          triggerButton={this.triggerButton}
          winner={winner}
          score={score}
          points={points}
        />
      </div>
    );
  }

  private triggerButton = () => {
    this.setState({
      cardData: [null, null]
    });
    this.handleGame();
  }

  private selectGame = (resource: string, points: number) => {
    this.setState({
      resource, 
      points,
      cardData: undefined,
      score: [0, 0],
      winner: undefined
    });
  }

  private handleGame = async () => {
    const { resource, maxNumAPI } = this.state;
    if (!resource) {
      return;
    }
    // This should go in utils functions
    // @TODO: depending on the resource the max number is different
    const num1 = getRandomIntInclusive(1, maxNumAPI);
    let num2 = getRandomIntInclusive(1, maxNumAPI);

    while (num1 === num2) {
      num2 = getRandomIntInclusive(1, maxNumAPI);
    };

    const [
      card1, 
      card2
    ] = await Promise.all([
      this.handleAPICall(resource, num1),
      this.handleAPICall(resource, num2)
    ]);

    if (card1 && card2) {
      const winner = this.handleWinner(card1, card2);
      setTimeout(() => {
        this.setState({
          cardData: [card1, card2],
          winner
        })
      }, 2000);
    };

    // @TODO: if there is an error, catch returns null. Should do something in the state
    // this.setState({
    //   cardData: undefined
    // });
  }

  private handleAPICall = async (resource: string, num: number): Promise<CardData | null> => {
    try {
      const response = await axios.get(`https://swapi.co/api/${resource}/${num}/`);
      return transformAPIData(resource, response.data); 
    } catch (error) {
      console.log(`Error while fetching: ${error}`)
      return null;
    }
  }

  private handleWinner = (card1: CardData, card2: CardData): string => {
    if (card1.metric > card2.metric) {
      this.setState(prevState => ({
        score: [
          prevState.score[0] + 1,
          prevState.score[1]
        ]
      }));
      return card1.name;
    }
    this.setState((prevState) => ({
      ...prevState,
      score: [
        prevState.score[0],
        prevState.score[1] + 1
      ]
    }));
    return card2.name;
  }
}

export default SWContainer;