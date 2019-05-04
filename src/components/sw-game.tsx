import React from 'react';
import SWFilters from './sw-filters';
import SWBoard from './sw-board';
import SWPlay from './sw-play';

const SWGame: React.FC = () => {
  return (
    <div>
      This is the Star Wars Game
      <SWFilters />
      <SWBoard />
      <SWPlay />
    </div>
  );
}

export default SWGame;