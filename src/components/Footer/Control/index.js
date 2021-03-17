import React, { useState } from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RepeatIcon from '@material-ui/icons/Repeat'

import './index.css'

const Control = () => {

  const [hovered, setHovered] = useState(false)

  return (
    <div className='control'>
      <div className='control-buttons'>
        <div className='play-icon'>
          <PauseIcon fontSize='small' />
        </div>
      </div>
      <div className='control-time'>
        <p style={{ marginRight: '10px' }}>0:00</p>
        <div
          className='control-time-bar'
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`control-time-bar-progress ${hovered ? 'backgroundGreen' : ''}`} />
        </div>
        <p style={{ marginLeft: '10px' }}>2:30</p>
      </div>
    </div>
  )
}

export default Control