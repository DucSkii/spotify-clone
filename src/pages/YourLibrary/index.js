import React from 'react'
import { useSelector } from 'react-redux'
import AlbumDisplay from '../../components/AlbumDisplay'

import './index.css'

const YourLibrary = () => {

  const user = useSelector(state => state.user.user)
  const playlists = useSelector(state => state.user.playlists)

  const renderPlaylists = () => {
    return playlists?.items.map((playlist, index) => {
      return (
        <div key={index} className='yourlibrary-playlist'>
          <AlbumDisplay
            title={playlist.name}
            albumId={playlist.id}
            playlist={true}
            image={user.images[0].url}
            name={user.display_name}
          />
        </div>
      )
    })
  }

  return (
    <div className='yourlibrary'>
      <h1>Playlists</h1>
      <div className='yourlibrary-body'>
        {renderPlaylists()}
      </div>
    </div>
  )
}

export default YourLibrary