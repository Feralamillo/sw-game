import React from 'react';

import { CardData } from '../core/types';

export interface Props {
  cardData: CardData | null;
  winner: string | undefined;
  index: number;
}

/**
 * Shows the card
 */
export class SWCard extends React.Component<Props>{ 
  
  public render() {
    const { cardData, winner, index } = this.props;

    if (!cardData) {
      return (
        <div className="col-sm sw-card-wrapper">
          <div className="card text-center loading-card sw-card">
            <div className="flip">
              <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/31/1533225054-mark-hamill-and-carrie-fisher-star-wars.jpg?crop=0.848xw:0.896xh;0.128xw,0&resize=480:*" className="card-img card-front" alt="star wars" />
              <img src="https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-wars-9-Anakin-and-Darth-Vader-force-ghost-leak-985172.jpg?r=1533001198664" className="card-img card-back" alt="star wars" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="col-sm sw-card-wrapper">
        <div className="card text-white text-center sw-card">
          <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/31/1533225054-mark-hamill-and-carrie-fisher-star-wars.jpg?crop=0.848xw:0.896xh;0.128xw,0&resize=480:*" className="card-img card-img-opacity" alt="star wars" />
          <div className="card-img-overlay">
            <div className="card-body">
              <h1 className="card-title">
                Player {index + 1} 
                {winner === cardData.name && (
                  <span className="badge badge-success ml-2">Winner</span>
                )}
              </h1>
              <h3 className="card-title">6</h3>
              <h5 className="card-title">{cardData.name}</h5>
              <p className="card-text">METRIC: {cardData.metric}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SWCard;