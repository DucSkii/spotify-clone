import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlaying } from '../../redux/ducks/userReducer'
import SpotifyPlayer from 'react-spotify-web-playback'

import './index.css'

const Footer = () => {

  const dispatch = useDispatch()
  const playing = useSelector(state => state.user.playing)
  const volume = useSelector(state => state.user.volume)
  const token = useSelector(state => state.user.token)
  const uri = useSelector(state => state.user.uri)
  const offset = useSelector(state => state.user.offset)

  const [footerUri, setFooterUri] = useState(null)

  useEffect(() => {
    setFooterUri(null)
    setTimeout(() => {
      setFooterUri(uri)
    }, 100)
  }, [offset, dispatch, uri])

  if (!token || !uri) {
    return null
  }

  const styles = {
    bgColor: 'rgb(28, 28, 28)',
    color: 'white',
    sliderColor: 'rgb(158, 158, 158)',
    sliderTrackColor: 'rgb(81, 81, 81)',
    trackArtistColor: 'rgb(206, 206, 206)',
    trackNameColor: 'white',
    loaderColor: 'white',
    sliderHandleColor: 'white',
    height: '90px',
  }

  return (
    <div className='footer-container'>
      <SpotifyPlayer
        styles={styles}
        token={token}
        uris={[footerUri]}
        play={playing}
        callback={state => {
          dispatch(setPlaying(state.isPlaying))
        }}
        initialVolume={volume}
        offset={offset}
      />
    </div>
  )
}

export default Footer