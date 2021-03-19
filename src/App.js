import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify'
import { useDispatch, useSelector } from 'react-redux'
import { setSpotifyOpen } from './redux/ducks/generalReducer'
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
  setRecentlyPlayed,
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

      s.getArtist('64tJ2EAv1R6UaZqc4iOCyj').then(artist => {
        console.log('artist', artist)
      })

      s.getMyRecentlyPlayedTracks().then((response) => {
        dispatch(setRecentlyPlayed(response.items))
      })

      s.getUserPlaylists().then((playlists) => {
        dispatch(setPlaylists(playlists))
      })

      s.getMyCurrentPlaybackState().then(song => {
        if (song.length === undefined) {
          console.log('song', song)
          dispatch(setSpotifyOpen(true))
          dispatch(setPlaying(song.is_playing))
          dispatch(setItem(song.item))
          dispatch(setShuffle(song.shuffle_state))
          dispatch(setRepeat(song.repeat_state))
          dispatch(setProgress(song.progress_ms))
        } else {
          s.getMyRecentlyPlayedTracks().then(tracks => {
            console.log('tracks', tracks)
            dispatch(setItem(tracks.items[0].track))
            s.setRepeat('context')
            s.setShuffle(false)
            dispatch(setProgress(0))
          })
        }
      })

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch(setDiscoverWeekly(response))
      )

      s.getMyDevices().then((res) => {
        const device = res.devices.filter(device => device.is_active === true)
        if (device.length) {
          dispatch(setVolume(device[0].volume_percent))
        } else {
          s.setVolume(50)
          dispatch(setVolume(50))
          setProgress(0)
        }
      })
    }
  }, [token, dispatch])

  // useEffect(() => {
  //   const timer = setInterval(() => playing && setCount(count + 1), 3e3)
  //   return () => {
  //     clearInterval(timer)
  //     if (!playing) {
  //       return null
  //     }
  //     s.getMyCurrentPlayingTrack().then(track => {
  //       dispatch(setProgress(track.progress_ms))
  //     })
  //     if (progress <= 5000) {
  //       s.getMyCurrentPlayingTrack().then(track => {
  //         dispatch(setItem(track.item))
  //       })
  //     }
  //   }
  // })

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
