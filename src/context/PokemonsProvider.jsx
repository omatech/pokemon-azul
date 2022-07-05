import { createContext } from 'react';

export const PokemonsContext = createContext();

const PokemonsProvider = ({ pokemons, pokemonTypes, setPokemonTypes, setSearch, search, totalPages, currentPage, setCurrentPage, children }) => {
  return <PokemonsContext.Provider value={{ pokemons, pokemonTypes, setPokemonTypes, setSearch, search, totalPages, currentPage, setCurrentPage }}>
    { children }
  </PokemonsContext.Provider>
}

export default PokemonsProvider;