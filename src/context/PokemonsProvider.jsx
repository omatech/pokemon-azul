import { createContext } from 'react';

export const PokemonsContext = createContext();

// @TODO crear reducer para todos los datos de la aplicacion
// habra un estado para cada: pokemons, pokemonTypes, pagination ...

const PokemonsProvider = ({ pokemons, pokemonTypes, setSearch, search, totalPages, currentPage, setCurrentPage, children }) => {
  return <PokemonsContext.Provider value={{ pokemons, pokemonTypes, setSearch, search, totalPages, currentPage, setCurrentPage }}>
    { children }
  </PokemonsContext.Provider>
}

export default PokemonsProvider;