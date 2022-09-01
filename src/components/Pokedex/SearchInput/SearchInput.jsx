import React from 'react'

const SearchInput = ({setPokeSearch}) => {

    const habdleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        e.target.searchText.value = ''
    }

  return (
    <form onSubmit={habdleSubmit}>
        <input id="searchText" type="text" />
        <button>Search</button>
    </form>
  )
}

export default SearchInput