import React from 'react'
import SongComponent from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/SongComponent',
  component: SongComponent,
}

export const Default = () => <SongComponent
  index={1}
  songName='夜に駆ける'
  songId='3dPtXHP0oXQ4HCWHsOA9js'
  duration={261013}
  artists={[{ name: 'YOASOBI', id: '64tJ2EAv1R6UaZqc4iOCyj' }]}
  album='夜に駆ける'
  albumId='3GzwPyPZCyrqUTaurTaS23'
/>