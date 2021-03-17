import React, { useEffect } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setToken, setTopArtists, setPlaylists, setSpotify } from './redux/ducks/userReducer'
import { closeDropdown } from './redux/ducks/dropdownReducer'

const s = new SpotifyWebApi()

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      let token = localStorage.getItem('userToken')
      s.setAccessToken(token)
      dispatch(setToken(token))

      dispatch(setSpotify(s))

      s.getMe().then((user) => {
        dispatch(setUser(user))
      })

      s.getMyTopArtists().then((response) => {
        dispatch(setTopArtists(response))
      })

      s.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })
      return
    }

    const hash = getTokenFromUrl()
    window.location.hash = ''
    let _token = hash.access_token

    if (_token) {
      s.setAccessToken(_token)
      dispatch(setToken(_token))
      localStorage.setItem('userToken', _token)

      dispatch(setSpotify(s))

      s.getMe().then((user) => {
        dispatch(setUser(user))
      })

      s.getMyTopArtists().then((response) => {
        dispatch(setTopArtists(response))
      })

      s.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })
    }
  }, [token, dispatch])

  const toggleDropdown = (e) => {
    if (e.target.parentNode.id) {
      return null
    }
    dispatch(closeDropdown())
  }
  
  return (
    <div className="App" style={{ backgroundColor: 'rgb(25, 25, 25)' }} onClick={toggleDropdown}>
      {token ? <Player spotify={s} /> : <Login />}
    </div>
  )
}

export default App
