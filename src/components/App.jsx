import List from "./List";
import ElementList from "./List/ElementList";
import { usePokemonTypes } from "./hooks/usePokemonTypes";
import { usePokemonPagination } from "./hooks/usePokemonPagination";
import FilterTypes from "./Filter/FilterTypes"
import FilterSearch from "./Filter/FilterSearch"
import FilterPage from "./Filter/FilterPage";
import { usePokemons } from "./hooks/usePokemons";
import PokemonsProvider from "../context/PokemonsProvider";

const Contexted = Component => props => 
  <PokemonsProvider>
    <Component {...props} />
  </PokemonsProvider>;

const App = () => {
    const [isLoading] = usePokemons()

    const [isLoadingTypes] = usePokemonTypes()

    const [paginatedPokemons, totalPages, currentPage, setCurrentPage] = usePokemonPagination(filteredPokemons)

    return (
      <>
      {isLoadingTypes ? <span>LOADING</span> : <FilterTypes />}
       
        { <FilterSearch /> }
          {isLoading ? <span>LOADING POKEMONS</span> : 
          <List>
            <ElementList />
          </List>
          }
        { <FilterPage /> }
        
      </>
    );
  };

export default Contexted(App);