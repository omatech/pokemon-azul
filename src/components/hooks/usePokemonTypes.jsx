import { useState } from "react";

export const usePokemonTypes = (initialPokemonTypes) => {
    const [pokemonTypes, setPokemonTypes] = useState(initialPokemonTypes);
    
    return [pokemonTypes, setPokemonTypes];
}