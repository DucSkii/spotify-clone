import React from 'react'
import Control from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Footer/Control',
  component: Control,
}

const item = {
  duration_ms: 205593,
}

export const Default = () => <Control item={item} progress={150000}/>