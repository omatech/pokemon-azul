import { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/stateReducer';

export const PokemonsContext = createContext();

const PokemonsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, {
    pokemons: [],
    pokemonTypes: [],
    filteredPokemons: [],
    searchInput: '',
    currentPage: 1,
    totalPages: 0,
    pokemonsPerPage: 10,
    offset: 0,
    countPokemons: 0,
    showModal: false,
    pokemonModal: {},
  });

  return (
    <PokemonsContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
