import React from 'react'
import SpotifyFont from '../src/utils/SpotifyFont'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <SpotifyFont>
      <Story />
    </SpotifyFont>
  )
]
