import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/ducks/userReducer'

const s = new SpotifyWebApi()

const App = () => {

  const [token, setToken] = useState(null)

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      s.setAccessToken(_token)
      s.getMe().then((user) => {
        dispatch(setUser(user))
      })
    }
  }, [dispatch])

  console.log(user)

  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login />}
    </div>
  )
}

export default App
