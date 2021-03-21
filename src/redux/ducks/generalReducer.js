export const openCover = () => {
  return {
    type: 'SET_COVER_TRUE',
  }
}

export const closeCover = () => {
  return {
    type: 'SET_COVER_FALSE',
  }
}

export const openDropdown = () => {
  return {
    type: 'SET_TRUE',
  }
}

export const closeDropdown = () => {
  return {
    type: 'SET_FALSE',
  }
}

export const setSpotifyOpen = (spotifyOpen) => {
  return {
    type: 'SET_SPOTIFY_OPEN',
    spotifyOpen,
  }
}

export const setBackgroundGradient = (backgroundGradient) => {
  return {
    type: 'SET_BACKGROUND_GRADIENT',
    backgroundGradient,
  }
}

const initialState = {
  open: false,
  coverOpen: false,
  spotifyOpen: false,
  backgroundGradient: 'red',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_GRADIENT':
      return {
        ...state,
        backgroundGradient: action.backgroundGradient,
      }
    case 'SET_SPOTIFY_OPEN':
      return {
        ...state,
        spotifyOpen: action.spotifyOpen,
      }
    case 'SET_COVER_TRUE':
      return {
        ...state,
        coverOpen: true,
      }
    case 'SET_COVER_FALSE':
      return {
        ...state,
        coverOpen: false,
      }
    case 'SET_TRUE':
      return {
        ...state,
        open: true,
      }
    case 'SET_FALSE':
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}