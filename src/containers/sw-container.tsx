import React from 'react';

import SWGame from '../components/sw-game';
import { cardData } from '../core/types';
import { LEIA_EXAMPLE } from '../core/constants';

export interface State {
  cardData: Array<cardData> | null;
}
/**
 * Handles the API Call
 */
class SWContainer extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      cardData: null
    };
  }
  
  public componentDidMount() {
    this.handleAPICall();
  }

  public render() {
    const { cardData } = this.state;

    if (!cardData) {
      return (
        <div className="container h-100">
          Sorry, we have an error...
        </div>
      )
    }

    return (
      <div className="container h-100">
        StaryContainer
        <SWGame cardData={cardData} />
      </div>
    );
  }

  private handleAPICall = (): void => {
    this.setState({
      cardData: [LEIA_EXAMPLE, LEIA_EXAMPLE]
    });
  }
}

export default SWContainer;