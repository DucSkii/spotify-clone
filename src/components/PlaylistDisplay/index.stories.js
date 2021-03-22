import React from 'react'
import PlaylistDisplay from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/PlaylistDisplay',
  component: PlaylistDisplay,
}

export const Default = () => <PlaylistDisplay
  playlistName="duc's playlist"
  playlistImage='https://i.scdn.co/image/ab6775700000ee8594477ce232d9f0805d73de5e'
/>