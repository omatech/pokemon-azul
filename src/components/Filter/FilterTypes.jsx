import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

const FilterTypes = ({dispatch, pokemonTypes}) => {
    //const { pokemonTypes } = useContext(PokemonsContext);

    const onChangeHandler = ({ target }) => {
        dispatch({
            type: 'SET_VISIBILITY_TYPE',
            payload: {
              name: target.name,
              checked: target.checked
            }
          });
    }
    return pokemonTypes && pokemonTypes.map(({ type, isChecked }) =>
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