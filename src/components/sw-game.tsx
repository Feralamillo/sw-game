import React from 'react';
import SWFilters from './sw-filters';
import SWBoard from './sw-board';
import SWPlay from './sw-play';
import { cardData } from '../core/types';

export interface Props {
  cardData: Array<cardData | null> | undefined;
  triggerButton: () => void;
  selectGame: (resource: string, points: number) => void;
  resource: string | undefined;
}

/**
 * Shows the components of the game
 */
export class SWGame extends React.Component<Props>{ 
  public render(){
    const { cardData, triggerButton, selectGame, resource } = this.props;

    return (
      <div>
        <SWFilters selectGame={selectGame} />
        {resource && (
          <React.Fragment>
            <SWBoard cardData={cardData} />
            <SWPlay triggerButton={triggerButton} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default SWGame;