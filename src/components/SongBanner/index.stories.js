import React from 'react'
import SongBanner from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/SongBanner',
  component: SongBanner,
}

export const Default = () => <SongBanner
  songName='夜に駆ける'
  image='https://images-na.ssl-images-amazon.com/images/I/71IywUSFmTL._AC_UL600_SR600,600_.jpg'
  duration={261013}
/>