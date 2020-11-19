import React from 'react';
import Sidebar from './Sidebar';

import './Player.css';
import Body from './Body';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body />
      </div>

      {/* footer */}
    </div>
  );
}

export default Player;
