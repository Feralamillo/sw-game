import React from 'react';
import classNames from 'classnames';

import { CardData } from '../core/types';
import { IMG } from '../core/constants';

export interface Props {
  cardData: CardData | null;
  winner?: string;
  index: number;
  score: number;
  points: number;
}

/**
 * Shows the card
 */
export class SWCard extends React.Component<Props>{ 
  
  public render() {
    const { cardData, winner, index, score, points } = this.props;

    if (!cardData) {
      return (
        <div className="col-sm card text-center loading-card sw-card">
          <div className="flip">
            <img 
              src={IMG.BACKGROUND_LOADING_CARD} 
              className="card-img card-front" 
              alt="star wars" 
            />
            <img 
              src={IMG.BACKGROUND_LOADING_CARD_BACK} 
              className="card-img card-back" 
              alt="star wars" 
            />
          </div>
        </div>
      );
    }
    
    // @TODO: include a way to display all the data.
    return (
      <div 
        className={
          classNames('col-sm card text-white text-center sw-card', 
          // eslint-disable-next-line
          {['bg-success']: (score === points)})
        }
      >
        <img 
          src={IMG.BACKGROUND_ACTIVE_CARD} 
          className="card-img card-img-opacity" 
          alt="star wars" 
        />
        <div className="card-img-overlay">
          <div className="card-body">
            <h1 className="card-title">
              Player {index + 1} 
              {winner === cardData.name && (
                <span className="badge badge-success ml-2">Winner</span>
              )}
            </h1>
            <h3 className="card-title">{score}/{points}</h3>
            <h5 className="card-title">{cardData.name}</h5>
            <p className="card-text">METRIC: {cardData.metric}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SWCard;