import React from 'react';

import { cardData } from '../core/types';

export interface Props {
  cardData: cardData
}

/**
 * Shows the card
 */
export class SWCard extends React.Component<Props>{ 
  
  public render() {
    const { cardData } = this.props;
    
    return (
      <div className="card sw-card-rapper">
        <div className="card-body">
          <h5 className="card-title">{cardData.name}</h5>
          <p className="card-text">With a mass of {cardData.mass}kg</p>
          <a href="http://google.com" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default SWCard;