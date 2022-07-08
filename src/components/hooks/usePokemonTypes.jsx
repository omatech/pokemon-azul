import { useReducer, useEffect,  } from "react";
import { pokemonVisibility } from '../../reducers/pokemonVisibility';

export const usePokemonTypes = (initialPokemonTypes) => {
    const POKEMON_TYPES_API = 'https://pokeapi.co/api/v2/type/' 
    const [pokemonTypes, dispatch] = useReducer(pokemonVisibility, initialPokemonTypes);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            const request = await fetch(POKEMON_TYPES_API, { signal: controller.signal });
            const result = await request.json();
            let pokemonTypes = [];
            if (request.ok) {
                pokemonTypes = result.results.map( (pokemonType) => {
                    return {'type' : pokemonType.name , 'isChecked' : true};
                });
            }
            dispatch({
                type: 'LOAD_POKEMON_TYPES',
                payload: {
                  types: pokemonTypes
                }
            });
        })()
        return () => controller.abort();
      }, []);
    
    return [pokemonTypes, dispatch];
}