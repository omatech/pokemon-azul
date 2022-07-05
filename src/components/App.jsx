import List from "./List";
import ElementList from "./List/ElementList";
import { usePokemonTypes } from "./hooks/usePokemonTypes";
import { usePokemonNames } from "./hooks/usePokemonNames";
import { usePokemonPagination } from "./hooks/usePokemonPagination";
import FilterTypes from "./Filter/FilterTypes"
import FilterSearch from "./Filter/FilterSearch"
import FilterPage from "./Filter/FilterPage";
import { usePokemons } from "./hooks/usePokemons";
import PokemonsProvider from "../context/PokemonsProvider";

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
      <PokemonsProvider pokemons={ paginatedPokemons } pokemonTypes={pokemonTypes} setPokemonTypes={setPokemonTypes} setSearch={ setSearch } search={search} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <FilterTypes />
        { <FilterSearch /> }
          {!isLoading && <List>
            <ElementList />
          </List>
          }
        { <FilterPage /> }
      </PokemonsProvider>
    );
  };

export default App;