import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlaying, setProgress } from '../../redux/ducks/userReducer'
import { closeCover } from '../../redux/ducks/generalReducer'
import Song from './Song'
import Volume from './Volume'
import Control from './Control'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import SpotifyPlayer from 'react-spotify-web-playback'

import './index.css'

const Footer = ({ spotify }) => {

  const dispatch = useDispatch()
  const playing = useSelector(state => state.user.playing)
  const volume = useSelector(state => state.user.volume)
  const token = useSelector(state => state.user.token)
  const uri = useSelector(state => state.user.uri)
  const offset = useSelector(state => state.user.offset)
  const item = useSelector(state => state.user.item)
  const [artists, setArtists] = useState([])
  const progress = useSelector(state => state.user.progress)
  const shuffle = useSelector(state => state.user.shuffle)
  const repeat = useSelector(state => state.user.repeat)
  const songCover = useSelector(state => state.general.coverOpen)

  useEffect(() => {
    if (item) {
      let artistArr = []
      item?.artists?.forEach(artist => {
        let artistObj = {
          name: artist.name,
          id: artist.id,
        }
        artistArr.push(artistObj)
      })
      setArtists(artistArr)
    }
  }, [item, dispatch])

  const [footerUri, setFooterUri] = useState(null)

  useEffect(() => {
    setFooterUri(null)
    setTimeout(() => {
      setFooterUri(uri)
    }, 100)
  }, [offset, dispatch, uri])

  if (!item || !token || !uri) {
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
      {/* <div className='footer'>
        <div className='footer-song'>
          <Song
            cover={item.album.images[0].url}
            song={item.name}
            artists={artists}
            id={item.id}
          />
        </div>
        <div className='footer-volume'>
          <Volume volume={volume} spotify={spotify} />
        </div>
      </div>
      <div className='footer-control'>
        <Control
          playing={playing}
          spotify={spotify}
          shuffle={shuffle}
          repeat={repeat}
          item={item}
          progress={progress}
        />
      </div>
      {songCover &&
        <div className='footer-songCover'>
          <img
            src={item.album.images[0].url}
            alt='Song Cover'
            draggable='false'
          />
          <div className='showLess' onClick={() => dispatch(closeCover())}>
            <ExpandMoreOutlinedIcon fontSize='large' />
          </div>
        </div>
      } */}
    </div>
  )
}

export default Footer