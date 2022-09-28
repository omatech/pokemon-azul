import { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/stateReducer';

export const PokemonsContext = createContext();

/**
 * @TODO crear reducer para todos los datos de la aplicacion
 * habra un estado para cada: pokemons, pokemonTypes, pagination ...
 */ 

const PokemonsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, {
    pokemons: [],
    pokemonTypes: [],
    filteredPokemons: [],
    searchInput: '',
    currentPage: 0,
    totalPages: 0,
    pokemonsPerPage: 10
  });
  
  return <PokemonsContext.Provider value={{ state, dispatch }}>
    { children }
  </PokemonsContext.Provider>
}

export default PokemonsProvider;