import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'

import './index.css'

const Navigation = (props) => {

  const renderIcon = () => {
    if (props.route === 'Home') {
      return (
        <HomeOutlinedIcon
          fontSize='large'
          className='navigation-icon'
        />
      )
    }
    if (props.route === 'Search') {
      return (
        <SearchOutlinedIcon
          fontSize='large'
          className='navigation-icon'
        />
      )
    }
    if (props.route === 'Your Library') {
      return (
        <LibraryMusicOutlinedIcon
          fontSize='large'
          className='navigation-icon'
        />
      )
    }
  }

  return (
    <div className={`navigation ${props.selected ? 'selected' : ''}`}>
      {renderIcon()}
      {props.route}
    </div>
  )
}

export default Navigation