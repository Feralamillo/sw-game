import React from 'react';
import SWFilters from './sw-filters';
import SWBoard from './sw-board';
import SWPlay from './sw-play';
import { cardData } from '../core/types';

export interface Props {
  cardData: Array<cardData> | undefined;
  triggerButton: () => void;
  loading: boolean;
}

/**
 * Shows the components of the game
 */
export class SWGame extends React.Component<Props>{ 
  public render(){
    const { cardData, triggerButton, loading } = this.props;

    return (
      <div>
        <SWFilters />
        <SWBoard cardData={cardData} loading={loading} />
        <SWPlay triggerButton={triggerButton} />
      </div>
    );
  }
}

export default SWGame;