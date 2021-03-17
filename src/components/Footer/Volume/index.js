import React, { useState } from 'react'
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined'
// import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined'
// import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined'
import QueueMusicIcon from '@material-ui/icons/QueueMusic'

import './index.css'

const Volume = () => {

  const [hovered, setHovered] = useState(false)

  return (
    <div className='volume'>
      <QueueMusicIcon className='queueIcon' />
      <div
        className='volume-control'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`volume-control-icon ${hovered ? 'colourWhite' : ''}`}>
          <VolumeUpOutlinedIcon />
        </div>
        <div className='volumeBar'>
          <div className={`volumeBar-level ${hovered ? 'backgroundGreen' : ''}`} />
        </div>
      </div>
    </div>
  )
}

export default Volume