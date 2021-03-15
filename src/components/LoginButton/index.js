import React from 'react'
import { accessUrl } from '../../spotify'
import './index.css'

const LoginButton = () => <a href={accessUrl} className='loginButton'>LOGIN WITH SPOTIFY</a>

export default LoginButton