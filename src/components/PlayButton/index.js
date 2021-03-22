import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import './index.css'

const PlayButton = ({ dimensions, size }) => {
  return (
    <div
      className='playButton'
      onClick={() => window.alert('Not yet implemented')}
      style={{
        width: `${dimensions ? dimensions : ''}`,
        height: `${dimensions ? dimensions : ''}`
      }}
    >
      <PlayArrowIcon
        style={{ fontSize: `${size ? size : ''}` }}
      />
    </div>
  )
}

export default PlayButton