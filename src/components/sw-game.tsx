import React from 'react';
import SWFilters from './sw-filters';
import SWBoard from './sw-board';
import SWPlay from './sw-play';
import { CardData } from '../core/types';

export interface Props {
  cardData: Array<CardData | null> | undefined;
  triggerButton: () => void;
  selectGame: (resource: string, points: number) => void;
  resource?: string;
  winner?: string;
  score: Array<number>;
  points: number;
}

/**
 * Shows the components of the game
 */
export class SWGame extends React.Component<Props>{ 
  public render(){
    const { cardData, triggerButton, selectGame, resource, winner, score, points } = this.props;

    return (
      <div className="container m-4">
        <div className="container">
          <div className="row justify-content-md-center">
          {resource 
            ? <React.Fragment>
                <p>
                  <a className="btn btn-primary" data-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="false" aria-controls="collapseFilters">
                    Filters
                  </a>
                </p>
                <div className="collapse" id="collapseFilters">
                  <div className="card card-body">
                    <SWFilters selectGame={selectGame} />
                  </div>
                </div>
              </React.Fragment>
            : <div className="card card-body text-center">
                <SWFilters selectGame={selectGame} />
              </div>
          }
          </div>
        </div>
         {resource && (
            <React.Fragment>
              <SWBoard 
                cardData={cardData} 
                resource={resource} 
                winner={winner} 
                score={score} 
                points={points} 
              />
              {Math.max(...score) < points && (
                <SWPlay triggerButton={triggerButton} />
              )}
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default SWGame;