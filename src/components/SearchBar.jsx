import React, { useState } from 'react'

const SearchBar = ({ handleFilter }) => {
  const [filter, setFilter] = useState('')
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='filter-input'
        placeholder='Type to filter titles'
        onChange={(event) => { setFilter(event.target.value) }}
      />
      <button
        className='filter-button'
        onClick={() => { handleFilter(filter) }}
      >
        Filter
      </button>
    </div>
  )
}

export default SearchBar
