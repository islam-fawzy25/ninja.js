import React from 'react'

const Search = ({onSearch}) => {

  return (
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch.bind(this)} />
  )
}

export default Search
