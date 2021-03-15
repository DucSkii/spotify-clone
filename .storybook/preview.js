import React from 'react'
import SpotifyFont from '../src/utils/SpotifyFont'
import Center from '../src/utils/Center'
import { BrowserRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <SpotifyFont>
        <Center>
          <Story />
        </Center>
      </SpotifyFont>
    </BrowserRouter>
  )
]
