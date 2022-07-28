import React from 'react';

import Grid from '../components/GameGrid/gameGrid';
import Players from '../components/GamePlayers/gamePlayer'
import Timer from '../components/Counters/gameCounter'

const GamePlayer = () => {
    return(
        <div className='playerPage'>
            <Grid/>
        </div>
    )
}

export default GamePlayer;