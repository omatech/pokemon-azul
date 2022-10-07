import { useEffect, useCallback, useMemo } from 'react';
import List from './List';
import ElementList from './List/ElementList';
import { usePokemonTypes } from './hooks/usePokemonTypes';
import FilterTypes from './Filter/FilterTypes';
import FilterSearch from './Filter/FilterSearch';
import FilterPage from './Filter/FilterPage';
import { usePokemons } from './hooks/usePokemons';
import PokemonsProvider from '../context/PokemonsProvider';
import Header from './Header';

const Contexted = Component => props =>
  (
    <PokemonsProvider>
      <Component {...props} />
    </PokemonsProvider>
  );

const App = () => {
  const [isLoading] = usePokemons();

  const [isLoadingTypes] = usePokemonTypes();

  const links = useMemo(
    () => [
      { title: 'Home', url: '/', target: '_self' },
      {
        title: 'Download repo',
        url: 'https://github.com/omatech/pokemon-azul',
        target: '_blank',
      },
    ],
    []
  );

  useEffect(() => console.log('<App>'));

  return (
    <>
      <Header links={links} />
      {isLoadingTypes ? <span>LOADING</span> : <FilterTypes />}
      {<FilterSearch />}
      {isLoading ? (
        <span>LOADING POKEMONS</span>
      ) : (
        <List>
          <ElementList />
        </List>
      )}
      {<FilterPage />}
    </>
  );
};

export default Contexted(App);
