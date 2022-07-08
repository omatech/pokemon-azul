export const pokemonVisibility = (state, { type, payload }) => {
    switch (type) {
      case "SET_VISIBILITY_TYPE":
      {
        const newState = structuredClone(state);
        const pokemonType = newState.find(({ type }) => type === payload.name);
        pokemonType.isChecked = payload.checked;
        return newState
      }
      
      case "LOAD_POKEMON_TYPES":
      {
        return payload.types
      }
      /*case "LOAD_POKEMON_NAMES":
      {
        const newState = structuredClone(state);
        newState.filter(({name}) => name.toLowerCase().includes(payload.search.toLowerCase()))
        return newState
      }*/
      default:
        return state;
    }
  }