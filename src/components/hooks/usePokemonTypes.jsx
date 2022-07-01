import { useState, useEffect } from "react";

export const usePokemonTypes = (initialPokemonTypes) => {
    const POKEMON_TYPES_API = 'https://pokeapi.co/api/v2/type/' 
    const [pokemonTypes, setPokemonTypes] = useState(initialPokemonTypes);

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
            setPokemonTypes(pokemonTypes);
        })();
        return () => controller.abort();
      }, []);
    
    return [pokemonTypes, setPokemonTypes];
}