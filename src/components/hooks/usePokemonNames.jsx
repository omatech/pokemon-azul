import { useState } from "react";

export const usePokemonNames = (pokemonList) => {
    const [search, setSearch] = useState('');
    // no hacemos structuredClone pq no estamos afectando directamente a los valores del array inicial (solo hacemos un filter)
    const filteredPokemons = pokemonList.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
  
    return [filteredPokemons, setSearch];
}