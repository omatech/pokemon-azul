import List from "./List";
import ElementList from "./List/ElementList";
import pokemons from "/public/data/pokemons.json"

const App = () => {
    const pokemonsList = pokemons.filter(pokemon => pokemon.types.find(type => type === "Fuego"));
    console.log(pokemonsList);
    return  <List>
                <ElementList pokemons={pokemonsList}/>
            </List>;
}

export default App;