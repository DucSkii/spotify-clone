const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  playing: false,
  volume: null,
  recentlyPlayed: [],
  token: null,
  uri: null,
  offset: 0,
}

export const setOffset = (offset) => {
  return {
    type: 'SET_OFFSET',
    offset,
  }
}

export const setUri = (uri) => {
  return {
    type: 'SET_URI',
    uri,
  }
}

export const setRecentlyPlayed = (recentlyPlayed) => {
  return {
    type: 'SET_RECENTLY_PLAYED',
    recentlyPlayed,
  }
}

export const setVolume = (volume) => {
  return {
    type: 'SET_VOLUME',
    volume,
  }
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
export const setPlaying = (playing) => {
  return {
    type: 'SET_PLAYING',
    playing,
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
    case 'SET_OFFSET':
      return {
        ...state,
        offset: action.offset,
      }
    case 'SET_URI':
      return {
        ...state,
        uri: action.uri,
      }
    case 'SET_RECENTLY_PLAYED':
      return {
        ...state,
        recentlyPlayed: action.recentlyPlayed,
      }
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.volume,
      }
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
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
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