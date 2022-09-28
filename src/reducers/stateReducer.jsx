const filterPokemon = (state) => {
    const filteredPokemons = state.pokemons.filter(({name}) => name.toLowerCase().includes(state.searchInput))

    return filteredPokemons.filter((pokemon) => {
        const pokemonTypesChecked = state.pokemonTypes.filter(pokemonType => pokemonType.isChecked).map(pokemonType => pokemonType.type)
        return pokemon.types.some((type) => pokemonTypesChecked.includes(type))
    })
}

export const stateReducer = (state, { type, payload }) => {
    switch (type) {
        case "LOAD_POKEMONS":
            {
                const newState = structuredClone(state);
                newState.pokemons = payload.pokemons;
                newState.filteredPokemons = payload.pokemons;
                return newState
            }

        case "LOAD_POKEMON_TYPES":
            {
                const newState = structuredClone(state);
                newState.pokemonTypes = payload.pokemonTypes;
                return newState
            }

        case "SET_VISIBILITY_TYPE":
            {
                const newState = structuredClone(state);
                const pokemonType = newState.pokemonTypes.find(({ type }) => type === payload.name);
                pokemonType.isChecked = payload.checked;
                newState.filteredPokemons = filterPokemon(newState)
                return newState
            }

        case "FILTER_NAME":
            {
                const newState = structuredClone(state);
                newState.searchInput = payload.search.toLowerCase()
                newState.filteredPokemons = filterPokemon(newState)
                return newState
            }

        case "UPDATE_PAGINATION":
            {
                const newState = structuredClone(state)
                newState.totalPages = Math.ceil(newState.pokemons.length / newState.pokemonsPerPage)
                const firstPokemon = (newState.currentPage * newState.pokemonsPerPage)
                const lastPokemon = firstPokemon + newState.pokemonsPerPage
                newState.filteredPokemons = newState.pokemons.slice(firstPokemon, lastPokemon)

                return newState
            }

        default:
            return state;
    }
}