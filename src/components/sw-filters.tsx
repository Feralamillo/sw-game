import React from 'react';

import { RESOURCES } from '../core/constants';

interface State {
  resource: string;
  points: number;
}

export interface Props {
  selectGame: (resource: string, points: number) => void;
}

/**
 * Shows the Filters for teh games
 */
export class SWFilters extends React.Component<Props, State>{ 
  
  constructor(props: Props) {
    super(props);
    this.state = {
      resource: 'people',
      points: 3
    };
  }

  public render() {
    const { resource, points } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            <div>
              Pick the resource you want to play:
            </div>
            <select 
              className="form-control form-control-lg" 
              name="resource" 
              value={resource} 
              onChange={this.handleSelectChange}
            >
              <option value={RESOURCES.PEOPLE}>People</option>
              <option value={RESOURCES.PLANETS}>Planets</option>
              <option value={RESOURCES.SPECIES}>Species</option>
              <option value={RESOURCES.STARSHIPS}>Starships</option>
              <option value={RESOURCES.VEHICLES}>Vehicles</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            <div>
              Number of games to play:
            </div>
            <input 
              name="points" 
              type="number" 
              value={points} 
              onChange={this.handleInputChange} 
            />
          </label>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }

  /**
   * Handles the data from the select
   */
  private handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target: { value } } = event;
    
    this.setState({
      resource: value
    });
  }

  /**
   * Handles the data from the input
   */
  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = event;
    
    this.setState({
      points: Number(value)
    });
  }

  /**
   * Handles the data when the submit botton is triggered
   */
  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { resource, points } = this.state;
    const { selectGame } = this.props;

    event.preventDefault();
    selectGame(resource, points);
  }
}

export default SWFilters;