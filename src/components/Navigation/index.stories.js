import React from 'react'
import Navigation from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Navigation',
  component: Navigation,
}

export const Default = () => <Navigation route='Home' />

export const Selected = () => <Navigation selected route='Search' />