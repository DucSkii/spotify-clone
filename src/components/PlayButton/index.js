import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { useDispatch } from 'react-redux'
import { setUri, setPlaying } from '../../redux/ducks/userReducer'

import './index.css'

const PlayButton = ({ dimensions, size, uri }) => {

  const dispatch = useDispatch()

  const handlePlay = () => {
    dispatch(setUri(uri))
    setTimeout(() => {
      dispatch(setPlaying(true))
    }, 500)
  }

  return (
    <div
      className='playButton'
      onClick={handlePlay}
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