import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify'
import { useDispatch, useSelector } from 'react-redux'
import {
  setUser,
  setToken,
  setTopArtists,
  setPlaylists,
  setSpotify,
  setPlaying,
  setItem,
  setDiscoverWeekly,
  setShuffle,
  setRepeat,
  setVolume,
  setProgress,
} from './redux/ducks/userReducer'
import { closeDropdown } from './redux/ducks/generalReducer'

const s = new SpotifyWebApi()

const App = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const open = useSelector(state => state.general.open)
  const playing = useSelector(state => state.user.playing)
  const progress = useSelector(state => state.user.progress)

  const [count, setCount] = useState(0)

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
        dispatch(setRepeat(song.repeat_state))
        dispatch(setProgress(song.progress_ms))
      })

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch(setDiscoverWeekly(response))
      )

      s.getMyDevices().then((res) => {
        const device = res.devices.filter(device => device.is_active === true)
        dispatch(setVolume(device[0].volume_percent))
      })
    }
  }, [token, dispatch])

  useEffect(() => {
    const timer = setInterval(() => playing && setCount(count + 1), 3e3)
    return () => {
      clearInterval(timer)
      s.getMyCurrentPlayingTrack().then(track => {
        dispatch(setProgress(track.progress_ms))
      })
      if (progress <= 5000) {
        s.getMyCurrentPlayingTrack().then(track => {
          dispatch(setItem(track.item))
        })
      }
    }
  })

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
