import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import AlbumDisplay from '../../components/AlbumDisplay'
import BackgroundGradient from '../../components/BackgroundGradient'
import { usePalette } from 'react-palette'

import './index.css'

const Artist = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const spotify = useSelector(state => state.user.spotify)
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState([])
  const { data } = usePalette(artist ? artist.images[0].url : null)

  useEffect(() => {
    spotify.getArtist(location.pathname.split('/')[2]).then(artist => {
      setArtist(artist)
      spotify.getArtistAlbums(artist.id).then(album => setAlbums(album.items))
      dispatch(setBackgroundGradient(data.lightMuted))
    })
  }, [location.pathname, spotify, data, dispatch])

  if (!artist) {
    return null
  }

  const renderAlbums = () => {
    return albums.map((album, index) => {
      return (
        <div key={index} className='artist-albums-item'>
          <AlbumDisplay
            title={album.name}
            image={album.images[0].url}
            releaseDate={album.release_date}
            albumId={album.id}
            albumType={album.album_type} />
        </div>
      )
    })
  }

  return (
    <div className='artist'>
      <BackgroundGradient />
      <div className='artist-header'>
        <div className='artist-header-section'>
          <div className='artist-icon-container'>
            <img
              draggable='false'
              src={artist.images[0].url}
              alt='User Icon'
              style={{ userSelect: 'none' }}
            />
          </div>
          <div className='artist-information'>
            <p>ARTIST</p>
            <h1>{artist.name}</h1>
            <div className='artist-detail'>
              <p className='followers' style={{ userSelect: 'none' }}>
                {artist.followers.total.toLocaleString()} Followers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='artist-body'>
        <h1>Albums</h1>
        <div className='artist-albums'>
          {renderAlbums()}
        </div>
      </div>
    </div>
  )
}

export default Artist