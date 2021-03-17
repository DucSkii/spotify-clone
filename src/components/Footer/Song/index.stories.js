import React from 'react'
import Song from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Footer/Song',
  component: Song,
}

export const Default = () => <Song
  cover='http://crownnote.com/sites/default/files/8ab2c1b33b261d39091a0d3ac7f6ff5f.png'
  song='Black'
  artists={['Dave']}
/>