import { useReducer, useEffect, useContext, useState,  } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { stateReducer } from "../../reducers/stateReducer";

export const usePokemonTypes = () => {
    const POKEMON_TYPES_API = 'https://pokeapi.co/api/v2/type/' 
    const {dispatch} = useContext(PokemonsContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMON_TYPES_API, { signal: controller.signal });
            const result = await request.json();
            let pokemonTypes = [];
            if (request.ok) {
                pokemonTypes = result.results.map( (pokemonType) => {
                    return {'type' : pokemonType.name , 'isChecked' : true};
                });
            }
            setIsLoading(false);
            dispatch({
                type: 'LOAD_POKEMON_TYPES',
                payload: {
                    pokemonTypes: pokemonTypes
                }
            });
        })()
        return () => controller.abort();
      }, []);
    
    return [isLoading];
}