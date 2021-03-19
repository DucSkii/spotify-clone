import React from 'react'
import { useSelector } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

import './index.css'

const Profile = () => {

  const user = useSelector(state => state.user.user)
  const playlists = useSelector(state => state.user.playlists)
  const recentlyPlayed = useSelector(state => state.user.recentlyPlayed)

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

  if (!user) {
    return null
  }

  return (
    <div className='profile'>
      <div className='profile-header'>
        <div className='profile-header-section'>
          <div className='profile-icon-container'>
            {user.images.length ? (
              <img
                draggable='false'
                src={user.images[0].url}
                alt='User Icon'
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
    </div>
  )
}

export default Profile