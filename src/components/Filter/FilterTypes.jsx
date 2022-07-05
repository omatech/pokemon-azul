import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

const FilterTypes = () => {
    const { pokemonTypes, setPokemonTypes } = useContext(PokemonsContext);

    const onChangeHandler = ({ target }) => {
        setPokemonTypes(state => {
            const newState = structuredClone(state);
            const pokemonType = newState.find(({ type }) => type === target.name);
            pokemonType.isChecked = target.checked;
            return newState;
        }); 
    }
    return pokemonTypes.map(({ type, isChecked }) =>
        <label key={type}>
            <input
                checked={ isChecked }
                type="checkbox"
                onChange={ onChangeHandler }
                name={ type }
            />
            <span> { type }</span>
        </label>
    ) 


}



export default FilterTypes;