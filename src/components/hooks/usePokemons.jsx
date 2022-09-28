import { useContext } from "react";
import { useState, useEffect } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

export const usePokemons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {dispatch} = useContext(PokemonsContext);
    const POKEMONS_API = "https://pokeapi.co/api/v2/pokemon/"

    const getPokemon = async (pokemon, controller) => {
        const request = await fetch(pokemon.url, { signal: controller.signal });
        const result = await request.json();
        let types = result.types.map((type) => {
            return type.type.name
        })
        return { "id": result.id, "name": result.name, "types": types,  'image': result.sprites.other['official-artwork'].front_default};
    };

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMONS_API + '?limit=1154&offset=0', { signal: controller.signal });
            const result = await request.json();
            let pokemons = [];
            if (request.ok) {
                pokemons = await Promise.all(result.results.map( async (pokemon) => {
                    return await getPokemon(pokemon, controller);
                }));
            }
            setIsLoading(false);
            dispatch({
                type: 'LOAD_POKEMONS',
                payload: {
                    pokemons: pokemons
                }
            })
        })()
        return () => controller.abort();
      }, [/*search*/]);
    
    return [isLoading];
}