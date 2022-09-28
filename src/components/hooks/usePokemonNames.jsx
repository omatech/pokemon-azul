/*import { useContext, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

export const usePokemonNames = () => {
    const [search, setSearch] = useState('');
    const {state, dispatch} = useContext(PokemonsContext);
    // no hacemos structuredClone pq no estamos afectando directamente a los valores del array inicial (solo hacemos un filter)
    //const filteredPokemons = pokemonList.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))

    dispatch({
        type: 'FILTER_NAME',
        payload: {
            search: search
        }
    })
}*/