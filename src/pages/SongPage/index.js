import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SongBanner from '../../components/SongBanner'
import SongDisplay from '../../components/SongDisplay'

import './index.css'

const SongPage = () => {

  const location = useLocation()
  const [artists, setArtists] = useState([])
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [duration, setDuration] = useState(null)
  const spotify = useSelector(state => state.user.spotify)

  useEffect(() => {
    setArtists([])
    window.scrollTo(0, 0)
    spotify.getTrack(location.pathname.split('/')[2]).then(track => {
      track.artists.forEach((artist) => {
        spotify.getArtist(artist.id).then(artist => {
          let artistObj = {
            name: artist.name,
            id: artist.id,
            image: artist.images[0].url,
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
          />
        </div>
      )
    })
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
      </div>
    </div>
  )
}

export default SongPage