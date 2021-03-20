import React, { useEffect } from 'react'
import SongBanner from '../../components/SongBanner'
import SongDisplay from '../../components/SongDisplay'

import './index.css'

const SongPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='songPage'>
      <SongBanner
        songName='夜に駆ける'
        image='https://images-na.ssl-images-amazon.com/images/I/71IywUSFmTL._AC_UL600_SR600,600_.jpg'
      />
      <div className='song-body'>
        <h1>Artists</h1>
        <div className='song-artist'>
          <SongDisplay
            image='https://i.scdn.co/image/6fd6fdea63477f7bd0d34f485527f13c23fe8069'
            artists='YOASOBI'
            artist={true}
            artistId='64tJ2EAv1R6UaZqc4iOCyj'
          />
        </div>
      </div>
    </div>
  )
}

export default SongPage