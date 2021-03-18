export const millisecondsToMinutes = (milliseconds) => {
  let minutes = Math.floor(milliseconds / 60000)
  let seconds = ((milliseconds % 60000) / 1000).toFixed(0)
  return (seconds === 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds)
}