import React from 'react'
import LoginButton from '../../components/LoginButton'
import './index.css'
import spotifyLogo from '../../images/spotifyLogo.jpg'

const Login = () => {

  return (
    <div className='login'>
      <img
        src={spotifyLogo}
        alt='Spotify Logo'
      />
      <LoginButton />
    </div>
  )
}

export default Login