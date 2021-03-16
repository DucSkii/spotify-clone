const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user,
  }
}

export const setPlaylists = (playlists) => {
  return {
    type: 'SET_PLAYLISTS',
    playlists,
  }
}
export const setSpotify = (spotify) => {
  return {
    type: 'SET_SPOTIFY',
    spotify,
  }
}
export const setDiscoverWeekly = (discover_weekly) => {
  return {
    type: 'SET_DISCOVER_WEEKLY',
    discover_weekly,
  }
}
export const setTopArtists = (top_artists) => {
  return {
    type: 'SET_TOP_ARTISTS',
    top_artists,
  }
}
export const setPlaying = (playing) => {
  return {
    type: 'SET_PLAYING',
    playing,
  }
}
export const setItem = (item) => {
  return {
    type: 'SET_ITEM',
    item,
  }
}
export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token,
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      }
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      }
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}