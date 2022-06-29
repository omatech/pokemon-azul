import { useState, useEffect } from "react";

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const POKEMONS_API = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {
        const controller = new AbortController();
    
        (async () => {
            //setIsLoading(true);
            const request = await fetch(POKEMONS_API, { signal: controller.signal });
            const result = await request.json();
            let pokemons = [];
            if(request.ok) {
                pokemons = result.results.map((pokemon, index) => {
                    const request = await fetch(pokemon.url, { signal: controller.signal });
                    const result = await request.json();
                    
                    return { "id": index+1, "name": pokemon.name, "url": pokemon.url };
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