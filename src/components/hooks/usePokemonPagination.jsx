import { useState } from "react";

/**
 * @TODO mirar de cargar el filteredPokemons quitando el pokemonList (¿¿ usando el reducer/context ??) 
 */
export const usePokemonPagination = (pokemonList) => {
    const [pokemonsPerPage, setPokemonsPerPage] = useState(11)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage)
    const firstPokemon = (currentPage * pokemonsPerPage)
    const lastPokemon = firstPokemon + pokemonsPerPage
    const pokemonPagination = pokemonList.slice(firstPokemon, lastPokemon)
  
    return [pokemonPagination, totalPages, currentPage, setCurrentPage];
}