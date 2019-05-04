import React from 'react';

import SWCard from './sw-card';
import { cardData } from '../core/types';

import './components.css';

export interface Props {
  cardData: Array<cardData> | undefined;
  loading: boolean;
}

/**
 * Shows the cards and the count for each player
 */
export class SWBoard extends React.Component<Props>{ 
  public render() {
    const { cardData, loading } = this.props;

    if(!cardData && !loading) {
      return (
        <div className="container h-100">
          <div className="row justify-content-md-center">
            Press play to start the game
          </div>
        </div>
      )
    }

    if (!cardData) {
      return (
        <div className="container h-100">
          <div className="row justify-content-md-center">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <SWCard cardData={cardData[0]} />
          <SWCard cardData={cardData[1]} />
        </div>
      </div>
    );
  }
}

export default SWBoard;