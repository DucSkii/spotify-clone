import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usePalette } from 'react-palette'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import BackgroundGradient from '../../components/BackgroundGradient'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PlayButton from '../../components/PlayButton'
import SongComponent from '../../components/SongComponent'

import './index.css'

const PlaylistPage = () => {

  const location = useLocation()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.user)
  const spotify = useSelector(state => state.user.spotify)
  const [playlist, setPlaylist] = useState(null)
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [songTotal, setSongTotal] = useState(null)
  const { data } = usePalette(user.images[0].url)

  useEffect(() => {
    let playlistId = location.pathname.split('/')[2]
    spotify.getPlaylist(playlistId).then(playlist => {
      setPlaylist(playlist)
      setPlaylistTracks(playlist.tracks.items)
      setSongTotal(playlist.tracks.total)
    })
    dispatch(setBackgroundGradient(data.lightMuted))
  }, [location.pathname, spotify, dispatch, data])

  const renderTracks = () => {
    return playlistTracks.map((track, index) => {
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
          />
        </div>
      )
    })
  }

  if (!playlist) {
    return null
  }

  return (
    <div className='playlistPage'>
      <BackgroundGradient />
      <div className='playlistPage-header'>
        <div className='playlistPage-header-section'>
          <div className='playlistPage-icon-container'>
            <img
              src={user.images[0].url}
              alt='Playlist Cover'
              draggable='false'
            />
          </div>
          <div className='playlistPage-information'>
            <p>PLAYLIST</p>
            <h1>{playlist.name}</h1>
            <div className='playlistPage-detail'>
              <Link
                to={`/user/${user.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='userLink'>
                  <img
                    src={user.images[0].url}
                    alt='Artist Icon'
                    draggable='false'
                  />
                  {user.display_name}
                </div>
              </Link>
              <p>
                • {songTotal} {songTotal === 1 ? 'song' : 'songs'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='playlistPage-body'>
        <div className='playlistPage-body-header'>
          <PlayButton
            dimensions='60px'
            size='40px'
          />
        </div>
        <div className='playlistPage-songs'>
          <div className='playlistPage-songs-header'>
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
  )
}

export default PlaylistPage