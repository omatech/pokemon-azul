import List from "./List";
import ElementList from "./List/ElementList";
import { usePokemonTypes } from "./hooks/usePokemonTypes";
import { usePokemonNames } from "./hooks/usePokemonNames";
import FilterTypes from "./Filter/FilterTypes"
import FilterSearch from "./Filter/FilterSearch"
import pokemons from "/public/data/pokemons.json"
import FilterPage from "./Filter/FilterPage";

const App = () => {
    const [pokemonTypes, setPokemonTypes] = usePokemonTypes (
      [
        {"type": "Fuego", "isChecked": true},
        {"type": "Agua", "isChecked": true}
      ]
    )
    const pokemonsList = pokemons.filter((pokemon) => {
      const pokemonTypesChecked = pokemonTypes.filter(pokemonType => pokemonType.isChecked).map(pokemonType => pokemonType.type)
      return pokemon.types.some((type) => pokemonTypesChecked.includes(type))
    });
    const [filteredPokemons, setSearch] = usePokemonNames(pokemonsList);
    return (
      <>
        <FilterTypes pokemonTypes={pokemonTypes} setPokemonTypes={setPokemonTypes}/>
        <FilterSearch setSearch={ setSearch }/>
        <List>
          <ElementList pokemons={ filteredPokemons } />
        </List>
        <FilterPage pages={7}/>
      </>
    );
  };

export default App;