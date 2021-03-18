import React, { useEffect } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setToken, setTopArtists, setPlaylists, setSpotify, setPlaying, setItem, setDiscoverWeekly, setShuffle } from './redux/ducks/userReducer'
import { closeDropdown } from './redux/ducks/generalReducer'

const s = new SpotifyWebApi()

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const open = useSelector(state => state.general.open)
  const user = useSelector(state => state.user.user)
  
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    let _token = hash.access_token

    if (_token) {
      s.setAccessToken(_token)
      dispatch(setToken(_token))

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

      s.getMyCurrentPlaybackState().then(song => {
        dispatch(setPlaying(song.is_playing))
        dispatch(setItem(song.item))
        dispatch(setShuffle(song.shuffle_state))
      })

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch(setDiscoverWeekly(response))
      );
    }
  }, [token, dispatch])

  const toggleDropdown = (e) => {
    if (e.target.parentNode.id) {
      return
    }
    dispatch(closeDropdown())
  }

  console.log('user', user)

  return (
    <div className="App" style={{ backgroundColor: 'rgb(25, 25, 25)' }} onClick={open ? toggleDropdown : () => { }}>
      {token ? <Player spotify={s} /> : <Login />}
    </div>
  )
}

export default App
