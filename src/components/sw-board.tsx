import React from 'react';

import SWCard from './sw-card';
import { CardData } from '../core/types';

import './components.css';

export interface Props {
  cardData?: Array<CardData | null>;
  resource: string;
  winner?: string;
  score: Array<number>;
  points: number;
}

/**
 * Shows the cards and the count for each player
 */
export class SWBoard extends React.Component<Props>{ 
  public render() {
    const { cardData, resource, winner, score, points } = this.props;

    if(!cardData) {
      return (
        <div className="container h-100 p-2">
          <div className="row justify-content-md-center">
            <h2>Playing {resource}</h2>
          </div>
          <div className="row justify-content-md-center">
            Press play to start the game
          </div>
        </div>
      )
    }

    return (
      <div className="container p-2">
        <div className="row justify-content-md-center p-2">
          <h2>Playing {resource}</h2>
        </div>
        <div className="row justify-content-md-center p-2">
          {cardData.map((card, index) => (
              <SWCard
                key={index}
                cardData={card}
                winner={winner}
                index={index}
                score={score[index]}
                points={points}
              />
          ))}
        </div>
        {winner && (
          <div className="row justify-content-md-center p-2">
          <h2>Winner: {winner}</h2>
        </div>
        )} 
      </div>
    );
  }
}

export default SWBoard;