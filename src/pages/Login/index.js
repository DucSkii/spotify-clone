import React from 'react'
import LoginButton from '../../components/LoginButton'
import './index.css'

const Login = () => {

  return (
    <div className='login'>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify Logo'
      />
      <LoginButton />
    </div>
  )
}

export default Login