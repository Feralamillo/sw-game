import React from 'react';
import axios from 'axios';

import SWGame from '../components/sw-game';
import { BASE_API_URL } from '../core/constants';
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
 * Handles the API Call and main methods
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

  /**
   * This is a callback that gets triggered from the play component.
   * Runs each individual game. 
   */
  private triggerButton = () => {
    // @TODO: make it scalable for more players creating an array
    this.setState({
      cardData: [null, null]
    });
    this.handleGame();
  }

  /**
   * Triggered from the filters component, this method sets up the game.
   * Firstly, it gathers how many resoources there are and then sets up the state
   * to start playing.
   */
  private selectGame = async (resource: string, points: number) => {
    const maxNumAPI = await this.handleAPICallMaxNumber(resource);
    
    this.setState({
      resource, 
      points,
      maxNumAPI,
      cardData: undefined,
      score: [0, 0],
      winner: undefined
    });
  }

  /**
   * Generates random numbers, gets the data for the cards,
   * finds the winner and updates the state.
   */
  private handleGame = async () => {
    const { resource, maxNumAPI } = this.state;
    if (!resource) {
      return;
    }

    // @TODO: This should go in utils functions
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
      // As the API is fast, the set time out forces the loading functionality.
      setTimeout(() => {
        this.setState({
          cardData: [card1, card2],
          winner
        })
      }, 2000);
    };

    // @TODO: if there is an error, catch returns null. Should do something in the state.
    // For now infinite loading until we get a response.
  }

  /**
   * Manage the GET request for the card data and returns it with the appropiate type.
   */
  private handleAPICall = async (resource: string, num: number): Promise<CardData | null> => {
    try {
      const response = await axios.get(`${BASE_API_URL}/${resource}/${num}/`);
      return transformAPIData(resource, response.data); 
    } catch (error) {
      console.log(`Error while fetching: ${error}`)
      return null;
    }
  }

  /**
   * Manages the GET request for the maximum number of a resource.
   */
  private handleAPICallMaxNumber = async (resource: string): Promise<number> => {
    try {
      const response = await axios.get(`${BASE_API_URL}/${resource}/`);
      return response.data.count; 
    } catch (error) {
      console.log(`Error while fetching the maximum number: ${error}`)
      return 5;
    }
  }

  /**
   * Manages the winner based on the highest metric, updates the state.
   */
  private handleWinner = (card1: CardData, card2: CardData): string => {
    // @TODO: refactor
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