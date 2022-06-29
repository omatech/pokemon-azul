import List from "./List";
import ElementList from "./List/ElementList";
import { usePokemonTypes } from "./hooks/usePokemonTypes";
import { usePokemonNames } from "./hooks/usePokemonNames";
import { usePokemonPagination } from "./hooks/usePokemonPagination";
import FilterTypes from "./Filter/FilterTypes"
import FilterSearch from "./Filter/FilterSearch"
import pokemons from "/public/data/pokemons.json"
import FilterPage from "./Filter/FilterPage";
//import { usePokemons } from "./hooks/usePokemons";

const App = () => {
    //const pokemons1 = usePokemons();
    const [pokemonTypes, setPokemonTypes] = usePokemonTypes (
      [
        {"type": "Eléctrico", "isChecked": true},
        {"type": "Roca", "isChecked": true},
        {"type": "Lucha", "isChecked": true},
        {"type": "Siniestro", "isChecked": true},
        {"type": "Hielo", "isChecked": true},
        {"type": "Acero", "isChecked": true},
        {"type": "Psíquico", "isChecked": true},
        {"type": "Tierra", "isChecked": true},
        {"type": "Fantasma", "isChecked": true},
        {"type": "Hada", "isChecked": true},
        {"type": "Dragón", "isChecked": true},
        {"type": "Normal", "isChecked": true},
        {"type": "Planta", "isChecked": true},
        {"type": "Veneno", "isChecked": true},
        {"type": "Volador", "isChecked": true},
        {"type": "Bicho", "isChecked": true},
        {"type": "Fuego", "isChecked": true},
        {"type": "Agua", "isChecked": true}
      ]
    )
    let pokemonsList = pokemons && pokemons.filter((pokemon) => {
      const pokemonTypesChecked = pokemonTypes.filter(pokemonType => pokemonType.isChecked).map(pokemonType => pokemonType.type)
      return pokemon.types.some((type) => pokemonTypesChecked.includes(type))
    });
    const [filteredPokemons, setSearch] = usePokemonNames(pokemonsList);

    const [paginatedPokemons, totalPages, currentPage, setCurrentPage] = usePokemonPagination(filteredPokemons)
    return (
      <>
        <FilterTypes pokemonTypes={pokemonTypes} setPokemonTypes={setPokemonTypes}/>
        <FilterSearch setSearch={ setSearch }/>
        <List>
          <ElementList pokemons={ paginatedPokemons } />
        </List>
        <FilterPage totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </>
    );
  };

export default App;