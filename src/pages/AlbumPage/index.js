import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { usePalette } from 'react-palette'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import BackgroundGradient from '../../components/BackgroundGradient'
import PlayButton from '../../components/PlayButton'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SongComponent from '../../components/SongComponent'

import './index.css'

const AlbumPage = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const spotify = useSelector(state => state.user.spotify)

  const [album, setAlbum] = useState(null)
  const [artistImage, setArtistImage] = useState(null)
  const [artistId, setArtistId] = useState(null)
  const [albumTracks, setAlbumTracks] = useState([])
  const { data } = usePalette(album ? album.images[0].url : null)

  useEffect(() => {
    let albumId = location.pathname.split('/')[2]
    spotify.getAlbum(albumId).then(album => {
      setAlbum(album)
      dispatch(setBackgroundGradient(data.lightMuted))
      spotify.getAlbumTracks(album.id).then(tracks => {
        setAlbumTracks(tracks.items)
      })
      spotify.getArtist(album.artists[0].id).then(artist => {
        setArtistImage(artist.images[0].url)
        setArtistId(artist.id)
      })
    })
  }, [location.pathname, spotify, data, dispatch])

  const renderTracks = () => {
    return albumTracks.map((track, index) => {
      let artistsArr = []
      track.artists.forEach(artist => {
        let artistObj = {
          name: artist.name,
          id: artist.id
        }
        artistsArr.push(artistObj)
      })

      return (
        <div key={index}>
          <SongComponent
            index={index + 1}
            songName={track.name}
            songId={track.id}
            duration={track.duration_ms}
            artists={artistsArr}
            album={album.name}
            albumId={album.id}
            uri={track.uri}
          />
        </div>
      )
    })
  }

  if (!album) {
    return null
  }

  return (
    <div className='albumPage'>
      <BackgroundGradient />
      <div className='albumPage-header'>
        <div className='albumPage-header-section'>
          <div className='albumPage-icon-container'>
            <img
              src={album.images[0].url}
              alt='Album Cover'
              draggable='false'
            />
          </div>
          <div className='albumPage-information'>
            <p>{album.album_type.toUpperCase()}</p>
            <h1>{album.name}</h1>
            <div className='albumPage-detail'>
              <Link
                to={`/artist/${artistId}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='artistLink'>
                  <img
                    src={artistImage}
                    alt='Artist Icon'
                    draggable='false'
                  />
                  {album.artists[0].name}
                </div>
              </Link>
              <p>
                • {album.release_date.split('-')[0]} • {album.total_tracks} {album.total_tracks === 1 ? 'song' : 'songs'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='albumPage-body'>
        <div className='albumPage-body-header'>
          <PlayButton
            dimensions='60px'
            size='40px'
            uri={album.uri}
          />
        </div>
        <div className='albumPage-songs'>
          <div className='albumPage-songs-header'>
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

export default AlbumPage