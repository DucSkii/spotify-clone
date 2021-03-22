import React from 'react'
import AlbumDisplay from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/AlbumDisplay',
  component: AlbumDisplay,
}

export const Default = () => <AlbumDisplay
  title='PSYCHODRAMA'
  image='https://i.scdn.co/image/ab67616d0000b273c1c8d2889455db6d03d309ed'
  releaseDate='2019-03-08'
  albumId='4GrFuXwRmEBJec22p58fsD'
  albumType='album'
/>

export const Playlist = () => <AlbumDisplay
  title="duc's playlist"
  image='https://i.scdn.co/image/ab6775700000ee8594477ce232d9f0805d73de5e'
  playlist={true}
  name='ducvietdao'
  albumId='5M9LmN6F7uaCUdTWOGIvRG'
/>