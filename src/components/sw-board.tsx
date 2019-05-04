import React from 'react';

import SWCard from './sw-card';
import { cardData } from '../core/types';

import './components.css';

export interface Props {
  cardData: Array<cardData>
}

/**
 * Shows the cards and the count for each player
 */
export class SWBoard extends React.Component<Props>{ 
  public render() {
    const { cardData } = this.props;

    return (
      <div className="sw-board">
        <SWCard cardData={cardData[0]} />
        <SWCard cardData={cardData[1]} />
      </div>
    );
  }
}

export default SWBoard;