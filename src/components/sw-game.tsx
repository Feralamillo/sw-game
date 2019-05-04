import React from 'react';
import SWFilters from './sw-filters';
import SWBoard from './sw-board';
import SWPlay from './sw-play';
import { cardData } from '../core/types';

export interface Props {
  cardData: Array<cardData>
}

/**
 * Shows the components of the game
 */
export class SWGame extends React.Component<Props>{ 
  public render(){
    const { cardData } = this.props;

    return (
      <div>
        Stary 
        <SWFilters />
        <SWBoard cardData={cardData} />
        <SWPlay />
      </div>
    );
  }
}

export default SWGame;