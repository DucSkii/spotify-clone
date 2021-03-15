import React from 'react'
import SpotifyFont from '../src/utils/SpotifyFont'
import Center from '../src/utils/Center'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <SpotifyFont>
      <Center>
        <Story />
      </Center>
    </SpotifyFont>
  )
]
