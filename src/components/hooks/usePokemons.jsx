import { useContext, useState, useEffect } from 'react';
import { PokemonsContext } from '../../context/PokemonsProvider';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch, state } = useContext(PokemonsContext);
  const POKEMONS_API = 'https://pokeapi.co/api/v2/pokemon/';

  const getPokemon = async (pokemon, controller) => {
    const request = await fetch(pokemon.url, { signal: controller.signal });
    const result = await request.json();
    const types = result.types.map(type => {
      return type.type.name;
    });
    return {
      id: result.id,
      name: result.name,
      types,
      image: result.sprites.other['official-artwork'].front_default,
    };
  };

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);
      const request = await fetch(
        POKEMONS_API +
          '?limit=' +
          state.pokemonsPerPage +
          '&offset=' +
          state.offset,
        { signal: controller.signal }
      );
      const result = await request.json();
      const countPokemons = result.count;
      let pokemons = [];
      if (request.ok) {
        pokemons = await Promise.all(
          result.results.map(async pokemon => {
            return await getPokemon(pokemon, controller);
          })
        );
      }
      setIsLoading(false);
      dispatch({
        type: 'LOAD_POKEMONS',
        payload: {
          pokemons,
          countPokemons,
        },
      });
    })();
    return () => controller.abort();
  }, [state.currentPage]);

  return [isLoading];
};
