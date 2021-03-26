import React, { useEffect } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify'
import { useDispatch, useSelector } from 'react-redux'
import {
  setUser,
  setToken,
  setPlaylists,
  setSpotify,
  setDiscoverWeekly,
  setVolume,
  setRecentlyPlayed,
  setUri,
} from './redux/ducks/userReducer'
import { closeDropdown } from './redux/ducks/generalReducer'

const s = new SpotifyWebApi()

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const open = useSelector(state => state.general.open)

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

      s.getMyRecentlyPlayedTracks().then((response) => {
        dispatch(setRecentlyPlayed(response.items))
      })

      s.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })

      s.getMyCurrentPlaybackState().then(song => {
        if (song.length === undefined) {
          dispatch(setUri(song.item.uri))
        } else {
          s.getMyRecentlyPlayedTracks().then(tracks => {
            dispatch(setUri(tracks.items[0].track.uri))
          })
        }
      })

      s.getPlaylist("37i9dQZEVXcFWEafQgSYVF").then((response) =>
        dispatch(setDiscoverWeekly(response))
      )


      s.getMyDevices().then((res) => {
        const device = res.devices.filter(device => device.is_active === true)
        if (device.length) {
          dispatch(setVolume(device[0].volume_percent))
        } else {
          s.setVolume(50)
          dispatch(setVolume(50))
        }
      })
    }
  }, [token, dispatch])

  const toggleDropdown = (e) => {
    if (e.target.parentNode.id) {
      return
    }
    dispatch(closeDropdown())
  }

  return (
    <div className="App" style={{ backgroundColor: 'rgb(25, 25, 25)' }} onClick={open ? toggleDropdown : () => { }}>
      {token ? <Player spotify={s} /> : <Login />}
    </div>
  )
}

export default App
