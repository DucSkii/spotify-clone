export const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'https://map-project-4763e.web.app/'
// const redirectUri = 'http://localhost:3000/'
const clientId = '485387d257aa437bb3ee92b85c0147fa'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-top-read',
  'streaming',
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'user-library-modify',
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`