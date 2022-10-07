import { useContext, useEffect, memo } from 'react';
import { PokemonsContext } from '../../context/PokemonsProvider';

const FilterTypes = () => {
  const { state, dispatch } = useContext(PokemonsContext);

  const onChangeHandler = ({ target }) => {
    dispatch({
      type: 'SET_VISIBILITY_TYPE',
      payload: {
        name: target.name,
        checked: target.checked,
      },
    });
  };
  useEffect(() => console.log('<FilterTypes>'));
  return (
    state.pokemonTypes &&
    state.pokemonTypes.map(({ type, isChecked }) => (
      <label key={type}>
        <input
          checked={isChecked}
          type='checkbox'
          onChange={onChangeHandler}
          name={type}
        />
        <span> {type}</span>
      </label>
    ))
  );
};

export default memo(FilterTypes);
