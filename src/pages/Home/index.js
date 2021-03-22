import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundGradient from '../../components/BackgroundGradient'
import PlaylistDisplay from '../../components/PlaylistDisplay'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import './index.css'

const Home = () => {

  const dispatch = useDispatch()
  const playlists = useSelector(state => state.user.playlists)
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    dispatch(setBackgroundGradient('rgb(69,23,3)'))
  }, [dispatch])

  const renderPlaylists = () => {
    return playlists?.items?.map((playlist, index) => {
      return (
        <div key={index} style={{ marginRight: '25px' }}>
          <PlaylistDisplay
            playlistName={playlist.name}
            playlistId={playlist.id}
            playlistImage={user.images[0].url}
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
      </div>
    </div>
  )
}

export default Home