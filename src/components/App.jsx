import List from "./List";
import ElementList from "./List/ElementList";
import { usePokemonTypes } from "./hooks/usePokemonTypes";
import { usePokemonNames } from "./hooks/usePokemonNames";
import { usePokemonPagination } from "./hooks/usePokemonPagination";
import FilterTypes from "./Filter/FilterTypes"
import FilterSearch from "./Filter/FilterSearch"
//import pokemons from "/public/data/pokemons.json"
import FilterPage from "./Filter/FilterPage";
import { usePokemons } from "./hooks/usePokemons";

const App = () => {
    const [isLoading, pokemons] = usePokemons();
    const [pokemonTypes, setPokemonTypes] = usePokemonTypes ( [] )
    let pokemonsList = pokemons && pokemons.filter((pokemon) => {
      const pokemonTypesChecked = pokemonTypes.filter(pokemonType => pokemonType.isChecked).map(pokemonType => pokemonType.type)
      return pokemon.types.some((type) => pokemonTypesChecked.includes(type))
    });
    const [filteredPokemons, setSearch, search] = usePokemonNames(pokemonsList);

    const [paginatedPokemons, totalPages, currentPage, setCurrentPage] = usePokemonPagination(filteredPokemons)
    return (
      <>
        <FilterTypes pokemonTypes={pokemonTypes} setPokemonTypes={setPokemonTypes}/>
        { <FilterSearch setSearch={ setSearch } search={search}/> }
        {!isLoading && <List>
          <ElementList pokemons={ paginatedPokemons } />
        </List>
        }
        { <FilterPage totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/> }
      </>
    );
  };

export default App;