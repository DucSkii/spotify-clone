import React from 'react'
import Song from './Song'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined'
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined'
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined'
import QueueMusicIcon from '@material-ui/icons/QueueMusic'

import './index.css'

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-song'>
          <Song
            cover='https://upload.wikimedia.org/wikipedia/en/4/44/Don%27t_Let_Me_Down_%28featuring_Daya%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png'
            song="Don't Let Me Down"
            artists={['The Chainsmokers', 'Daya']}
          />
        </div>
        <div className='footer-volume'>
          VOLUME
       </div>
        {/* 3 sections, currentsong, play, volume */}
        {/* play section has 2 sections, controls. time */}
      </div>
      <div className='footer-control'>
        CONTROLSsssssssssssssssssssssssssssssssssssssssssssssssss
      </div>
    </div>
  )
}

export default Footer