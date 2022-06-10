import List from "./List";
import ElementList from "./List/ElementList";
import pokemons from "/public/data/pokemons.json"
const pokemonType = "Fuego";

const App = () => {
    const pokemonsList = pokemons.filter((pokemon) =>
      pokemon.types.find((type) => type === pokemonType)
    );
    return !pokemonsList.length ? (
      "No Pokemon of type " + pokemonType
    ) : (
      <List>
        <ElementList pokemons={pokemonsList} />
      </List>
    );
  };

export default App;