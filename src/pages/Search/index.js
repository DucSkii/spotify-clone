import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SongComponent from '../../components/SongComponent'

import './index.css'

const Search = () => {

  const spotify = useSelector(state => state.user.spotify)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    spotify.searchTracks(search).then(res => {
      setSearchResults(res.tracks.items)
    })
  }, [search, spotify])

  const renderSearchResults = () => {
    return searchResults.map((result, index) => {
      let artistsArr = []
      result.artists.forEach(artist => {
        let artistObj = {
          name: artist.name,
          id: artist.id,
        }
        artistsArr.push(artistObj)
      })
      return (
        <div key={index}>
          <SongComponent
            index={index + 1}
            songName={result.name}
            songId={result.id}
            duration={result.duration_ms}
            artists={artistsArr}
            album={result.album.name}
            albumId={result.album.id}
          />
        </div>
      )
    })
  }

  return (
    <div className='search'>
      <div className='search-body'>
        <input
          className='searchbar'
          placeholder='Search Tracks'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchResults.length !== 0 &&
          <div className='searchResults'>
            {renderSearchResults()}
          </div>
        }
      </div>
    </div>
  )
}

export default Search