import React from 'react'
import { useSelector } from 'react-redux'
import AlbumDisplay from '../../components/AlbumDisplay'

import './index.css'

const YourLibrary = () => {

  const user = useSelector(state => state.user.user)
  const playlists = useSelector(state => state.user.playlists)
  const image = user.images.length ? user.images[0].url : 'https://i.gyazo.com/94226ff56d23f634f83e46ddeeb2b964.png'

  const renderPlaylists = () => {
    return playlists?.items.map((playlist, index) => {
      return (
        <div key={index} className='yourlibrary-playlist'>
          <AlbumDisplay
            title={playlist.name}
            albumId={playlist.id}
            playlist={true}
            image={image}
            name={user.display_name}
            uri={playlist.uri}
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