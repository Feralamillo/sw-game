import React from 'react';

import { cardData } from '../core/types';

export interface Props {
  cardData: cardData | null;
}

/**
 * Shows the card
 */
export class SWCard extends React.Component<Props>{ 
  
  public render() {
    const { cardData } = this.props;

    if (!cardData) {
      return (
        <div className="col-sm">
          <div className="card sw-card-rapper text-center loading-card">
            <div className="flip">
              <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/31/1533225054-mark-hamill-and-carrie-fisher-star-wars.jpg?crop=0.848xw:0.896xh;0.128xw,0&resize=480:*" className="card-img card-front" alt="star wars" />
              <img src="https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-wars-9-Anakin-and-Darth-Vader-force-ghost-leak-985172.jpg?r=1533001198664" className="card-img card-back" alt="star wars" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="col-sm">
        <div className="card sw-card-rapper text-white text-center">
          <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/31/1533225054-mark-hamill-and-carrie-fisher-star-wars.jpg?crop=0.848xw:0.896xh;0.128xw,0&resize=480:*" className="card-img card-img-opacity" alt="star wars" />
          <div className="card-img-overlay">
            <div className="card-body">
              <h5 className="card-title">{cardData.name}</h5>
              <p className="card-text">With a mass of {cardData.mass}kg</p>
              <a href="http://google.com" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SWCard;