import React from 'react'
import { useSelector } from 'react-redux'

import './index.css'

const BackgroundGradient = () => {

  const colour = useSelector(state => state.general.backgroundGradient)

  return (
    <div className='backgroundGradient'
      style={{
        background: `linear-gradient(180deg, rgba(2,0,36,1) 0%, ${colour} 0%, rgba(25,25,25,1) 46%)`
      }}
    />
  )
}

export default BackgroundGradient