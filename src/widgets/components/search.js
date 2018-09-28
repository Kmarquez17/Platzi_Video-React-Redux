import React from 'react'
import './search.css'
import { Prompt } from 'react-router'

function Search(props) {
  return (
    <form
      className="Search"
      onSubmit={props.handleSubmit}
    >
      <Prompt
        when={props.prompt}
        message="¿Estás seguro de dejar la página?"
      />
      <input
        ref={props.setRef}
        type="text"
        placeholder="Busca tu video Favorito"
        className="Search-input"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  )
}


export default Search
