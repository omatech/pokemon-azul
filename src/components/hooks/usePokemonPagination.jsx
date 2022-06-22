import { useState } from "react";

export const usePokemonPagination = (pokemonList) => {
    const [pokemonsPerPage, setPokemonsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage)
    const firstPokemon = (currentPage * pokemonsPerPage)
    const lastPokemon = firstPokemon + pokemonsPerPage
    const pokemonPagination = pokemonList.slice(firstPokemon, lastPokemon)
  
    return [pokemonPagination, totalPages, currentPage, setCurrentPage];
}