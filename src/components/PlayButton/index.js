import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import './index.css'

const PlayButton = () => {
  return (
    <div className='playButton' onClick={() => window.alert('Not yet implemented')}>
      <PlayArrowIcon />
    </div>
  )
}

export default PlayButton