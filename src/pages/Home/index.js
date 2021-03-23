import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundGradient from '../../components/BackgroundGradient'
import PlaylistDisplay from '../../components/PlaylistDisplay'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SongComponent from '../../components/SongComponent'

import './index.css'

const Home = () => {

  const dispatch = useDispatch()
  const playlists = useSelector(state => state.user.playlists)
  const user = useSelector(state => state.user.user)
  const discoverWeekly = useSelector(state => state.user.discover_weekly)
  const [discoverWeeklyTracks, setDiscoverWeeklyTracks] = useState([])
  const image = user.images.length ? user.images[0].url : 'https://i.gyazo.com/94226ff56d23f634f83e46ddeeb2b964.png'

  useEffect(() => {
    dispatch(setBackgroundGradient('rgb(69,23,3)'))
    setDiscoverWeeklyTracks(discoverWeekly?.tracks.items)
  }, [dispatch, discoverWeekly])

  const renderPlaylists = () => {
    return playlists?.items?.map((playlist, index) => {
      return (
        <div key={index} style={{ marginRight: '25px', marginBottom: '25px' }}>
          <PlaylistDisplay
            playlistName={playlist.name}
            playlistId={playlist.id}
            playlistImage={image}
            uri={playlist.uri}
          />
        </div>
      )
    })
  }
  
  const renderTracks = () => {
    return discoverWeeklyTracks?.map((track, index) => {
      let artistsArr = []
      track.track.artists.forEach(artist => {
        let artistObj = {
          name: artist.name,
          id: artist.id,
        }
        artistsArr.push(artistObj)
      })

      return (
        <div key={index}>
          <SongComponent
            index={index + 1}
            songName={track.track.name}
            songId={track.track.id}
            duration={track.track.duration_ms}
            artists={artistsArr}
            album={track.track.album.name}
            albumId={track.track.album.id}
            uri={track.track.uri}
          />
        </div>
      )
    })
  }

  return (
    <div className='home'>
      <BackgroundGradient />
      <div className='home-content'>
        <h1>Good afternoon</h1>
        <div className='home-playlists'>
          {renderPlaylists()}
        </div>
        <div className='home-body'>
          <h2>Discover Weekly</h2>
          <div className='home-songs'>
            <div className='home-songs-header'>
              <p style={{ width: '3%', textAlign: 'center' }}>#</p>
              <p style={{ width: '42%' }}>TITLE</p>
              <p style={{ width: '1%' }} />
              <p style={{ width: '24%' }}>ARTIST</p>
              <p style={{ width: '1%' }} />
              <p style={{ width: '24%' }}>ALBUM</p>
              <p style={{ width: '5%', textAlign: 'center' }}>
                <AccessTimeIcon />
              </p>
            </div>
            {renderTracks()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home