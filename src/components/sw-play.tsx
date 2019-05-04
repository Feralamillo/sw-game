import React from 'react';

export interface Props {
  triggerButton: () => void;
}

/**
 * Component to trigger the play game
 */
export class SWPlay extends React.Component<Props>{ 
  public render() {
    const { triggerButton } = this.props;
    
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={triggerButton}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default SWPlay;