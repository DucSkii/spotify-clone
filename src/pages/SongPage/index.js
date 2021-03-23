import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SongBanner from '../../components/SongBanner'
import SongDisplay from '../../components/SongDisplay'

import './index.css'
import AlbumDisplay from '../../components/AlbumDisplay'

const SongPage = () => {

  const location = useLocation()
  const [artists, setArtists] = useState([])
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [duration, setDuration] = useState(null)
  const [album, setAlbum] = useState(null)
  const spotify = useSelector(state => state.user.spotify)

  useEffect(() => {
    setArtists([])
    spotify.getTrack(location.pathname.split('/')[2]).then(track => {
      setAlbum(track.album)
      track.artists.forEach((artist) => {
        spotify.getArtist(artist.id).then(artist => {
          let artistObj = {
            name: artist.name,
            id: artist.id,
            image: artist.images[0].url,
            uri: artist.uri,
          }
          setArtists(state => [...state, artistObj])
        })
      })
      setName(track.name)
      setImage(track.album.images[0].url)
      setDuration(track.duration_ms)
    })
  }, [location.pathname, spotify])

  const renderArtists = () => {
    return artists.map((artist, index) => {
      return (
        <div key={index} className='song-artist'>
          <SongDisplay
            image={artist.image}
            artists={artist.name}
            artist={true}
            artistId={artist.id}
            uri={artist.uri}
          />
        </div>
      )
    })
  }

  if (!album) {
    return null
  }
  
  return (
    <div className='songPage'>
      <SongBanner
        songName={name}
        image={image}
        duration={duration}
      />
      <div className='song-body'>
        <h1>Artists</h1>
        <div className='song-artist-container'>
          {renderArtists()}
        </div>
        <div className='song-album'>
          <h1>Album</h1>
          <div className='song-album-item'>
            <AlbumDisplay
              title={album.name}
              image={album.images[0].url}
              releaseDate={album.release_date}
              albumId={album.id}
              albumType={album.album_type}
              uri={album.uri}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongPage