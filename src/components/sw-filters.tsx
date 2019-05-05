import React from 'react';

interface State {
  resource: string;
  points: number;
}

interface Props {
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
      <div className="container">
        <div className="row justify-content-md-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                <div>
                  Pick the resource you want to play:
                </div>
                <select name="resource" value={resource} onChange={this.handleSelectChange}>
                  <option value="people">People</option>
                  <option value="planets">Planets</option>
                  <option value="species">Species</option>
                  <option value="starships">Starships</option>
                  <option value="vehicles">Vehicles</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                <div>
                  Number of games to play:
                </div>
                <input name="points" type="number" value={points} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }

  private handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target: { value } } = event;
    
    this.setState({
      resource: value
    });
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = event;
    
    this.setState({
      points: Number(value)
    });
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { resource, points } = this.state;
    const { selectGame } = this.props;

    event.preventDefault();
    selectGame(resource, points);
  }
}

export default SWFilters;