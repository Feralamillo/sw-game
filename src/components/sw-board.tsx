import React from 'react';

import SWCard from './sw-card';
import { cardData } from '../core/types';

import './components.css';

export interface Props {
  cardData: Array<cardData | null> | undefined;
}

/**
 * Shows the cards and the count for each player
 */
export class SWBoard extends React.Component<Props>{ 
  public render() {
    const { cardData } = this.props;

    if(!cardData) {
      return (
        <div className="container h-100 p-5">
          <div className="row justify-content-md-center">
            Press play to start the game
          </div>
        </div>
      )
    }

    return (
      <div className="container p-5">
        <div className="row justify-content-md-center">
          {cardData.map((card, index) => (
            <SWCard
              key={index}
              cardData={card}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SWBoard;