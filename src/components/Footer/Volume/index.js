import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setVolume } from '../../../redux/ducks/userReducer'
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined'
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined'
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined'
import QueueMusicIcon from '@material-ui/icons/QueueMusic'

import './index.css'

const Volume = ({ volume, spotify }) => {

  const dispatch = useDispatch()

  const [hovered, setHovered] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(null)

  const handleMute = () => {
    if (volume === 0) {
      if (previousVolume === null) {
        return null
      } else {
        spotify.setVolume(previousVolume)
        dispatch(setVolume(previousVolume))
      }
    } else {
      setPreviousVolume(volume)
      spotify.setVolume(0)
      dispatch(setVolume(0))
    }
  }

  const renderVolumeIcon = () => {
    if (volume === 0) {
      return (
        <VolumeOffOutlinedIcon onClick={handleMute} />
      )
    } else if (volume <= 33) {
      return (
        <VolumeDownOutlinedIcon onClick={handleMute} />
      )
    } else {
      return (
        <VolumeUpOutlinedIcon onClick={handleMute} />
      )
    }
  }

  return (
    <div className='volume'>
      <QueueMusicIcon className='queueIcon' />
      <div
        className='volume-control'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`volume-control-icon ${hovered ? 'colourWhite' : ''}`}>
          {renderVolumeIcon()}
        </div>
        <div className='volumeBar'>
          <div
            className={`volumeBar-level ${hovered ? 'backgroundGreen' : ''}`}
            style={{ width: `${volume}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Volume