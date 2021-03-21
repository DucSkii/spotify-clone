import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SongDisplay from '../../components/SongDisplay'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import BackgroundGradient from '../../components/BackgroundGradient'
import { usePalette } from 'react-palette'
import noavatar from '../../images/noavatar.png'

import './index.css'

const Profile = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user.user)
  const playlists = useSelector(state => state.user.playlists)
  const recentlyPlayed = useSelector(state => state.user.recentlyPlayed)
  const [hovered, setHovered] = useState(false)
  const { data } = usePalette(user.images.length ? user.images[0].url : noavatar)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setBackgroundGradient(data.lightMuted))
  }, [dispatch, data])

  const renderPlaylists = () => {
    if (playlists.items) {
      const publicPlaylists = playlists.items.filter(playlist => playlist.public === true)
      if (publicPlaylists.length === 1) {
        return (
          <p style={{ marginLeft: '0px', color: 'darkgrey' }}>1 Public Playlist</p>
        )
      } else {
        return (
          <p style={{ marginLeft: '0px', color: 'darkgrey' }}>{publicPlaylists.length} Public Playlists</p>
        )
      }
    } else {
      return (
        <p style={{ marginLeft: '0px', color: 'darkgrey' }}>0 Public Playlists</p>
      )
    }
  }

  const renderRecentlyPlayed = () => {
    return recentlyPlayed.map((song, index) => {
      let artists = []
      song.track.artists.forEach(artist => {
        artists.push(artist.name)
      })

      return (
        <div className='profile-songs-item' key={index}>
          <SongDisplay artists={artists} songName={song.track.name} image={song.track.album.images[0].url} songId={song.track.id} />
        </div>
      )
    })
  }

  if (!user) {
    return null
  }

  return (
    <div className='profile'>
      <BackgroundGradient />
      <div className='profile-header'>
        <div className='profile-header-section'>
          <div className='profile-icon-container'>
            <div
              className='profile-icon-cover'
              onMouseLeave={() => setHovered(false)}
              style={{ display: `${hovered ? 'flex' : 'none'}` }}
            >
              <CreateOutlinedIcon style={{ fontSize: '60px', marginBottom: '10px' }} />
              Choose photo
            </div>
            {user.images.length ? (
              <img
                onMouseOver={() => setHovered(true)}
                draggable='false'
                src={user.images[0].url}
                alt='User Icon'
                style={{ userSelect: 'none' }}
              />
            ) : (
              <AccountCircleOutlinedIcon style={{ fontSize: '230px', color: 'rgb(107, 107, 107)' }} />
            )}
          </div>
          <div className='profile-information'>
            <p>PROFILE</p>
            <h1>{user.display_name}</h1>
            <div className='profile-detail'>
              {renderPlaylists()}
              <p style={{ userSelect: 'none' }}>•</p>
              <p className='followers' style={{ userSelect: 'none' }}>
                {user.followers.total} {(user.followers.total === 1) ? 'Follower' : 'Followers'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-body'>
        <h1>Recently Played</h1>
        <p>Only visible to you</p>
        <div className='profile-songs'>
          {renderRecentlyPlayed()}
        </div>
      </div>
    </div>
  )
}

export default Profile