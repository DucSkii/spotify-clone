import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BackgroundGradient from '../../components/BackgroundGradient'
import { setBackgroundGradient } from '../../redux/ducks/generalReducer'
import './index.css'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBackgroundGradient('rgb(69,23,3)'))
  }, [dispatch])

  return (
    <div className='home'>
      <BackgroundGradient />
      <div className='home-content'>
        <h1>Good afternoon</h1>
      </div>
    </div>
  )
}

export default Home