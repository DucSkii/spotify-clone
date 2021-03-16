import React from 'react'
import SpotifyFont from '../src/utils/SpotifyFont'
import Center from '../src/utils/Center'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/redux/configureStore'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <SpotifyFont>
          <Center>
            <Story />
          </Center>
        </SpotifyFont>
      </Provider>
    </BrowserRouter>
  )
]
