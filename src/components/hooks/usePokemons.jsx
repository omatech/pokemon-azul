import { useState, useEffect } from "react";

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const POKEMONS_API = "https://pokeapi.co/api/v2/pokemon"

    const getPokemon = async (pokemon) => {
        const request = await fetch(pokemon.url);
        const result = await request.json();
        let types = result.types.map((type) => {
            return type.type.name
        })
        return Promise.resolve({ "id": pokemon.id, "name": pokemon.name, "types": types.join(',') });
    };

    useEffect(() => {
        const controller = new AbortController();
    
        (async () => {
            //setIsLoading(true);
            const request = await fetch(POKEMONS_API, { signal: controller.signal });
            const result = await request.json();
            let pokemons = [];
            if(request.ok) {
                pokemons = result.results.map( async (pokemon) => {
                    return await getPokemon(pokemon);
                })
            }
            //setIsLoading(false);
            //setCountries(countries);
            console.log(pokemons)
        })();
        return () => controller.abort();
      }, [/*search*/]);
    
    return [pokemons];
}