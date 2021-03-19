import React from 'react'
import SongDisplay from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/SongDisplay',
  component: SongDisplay,
}

export const Default = () => <SongDisplay
  image='https://images-na.ssl-images-amazon.com/images/I/71IywUSFmTL._AC_UL600_SR600,600_.jpg'
  songName='夜に駆ける'
  artists={['YOASOBI']}
  songId='3dPtXHP0oXQ4HCWHsOA9js'
/>

export const Artist = () => <SongDisplay
  image='https://i.scdn.co/image/6fd6fdea63477f7bd0d34f485527f13c23fe8069'
  artists='YOASOBI'
  artist={true}
  artistId='64tJ2EAv1R6UaZqc4iOCyj'
/>