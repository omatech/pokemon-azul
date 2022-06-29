import { useState, useEffect } from "react";

export const usePokemons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const POKEMONS_API = "https://pokeapi.co/api/v2/pokemon"

    const getPokemon = async (pokemon, controller) => {
        const request = await fetch(pokemon.url, { signal: controller.signal });
        const result = await request.json();
        let types = result.types.map((type) => {
            return type.type.name
        })
        return { "id": result.id, "name": result.name, "types": types };
    };

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMONS_API, { signal: controller.signal });
            const result = await request.json();
            let pokemons = [];
            if(request.ok) {
                pokemons = await Promise.all(result.results.map( async (pokemon) => {
                    return await getPokemon(pokemon, controller);
                }));
            }
            setIsLoading(false);
            setPokemons(pokemons);
        })();
        return () => controller.abort();
      }, [/*search*/]);
    
    return [isLoading, pokemons];
}