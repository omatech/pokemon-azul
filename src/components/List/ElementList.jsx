import { useContext, useEffect } from 'react';
import { PokemonsContext } from '../../context/PokemonsProvider';
import ElementImage from './ElementImage';
import styles from './ElementList.module.scss';

const ElementList = () => {
  useEffect(() => console.log('<ElementList>'));
  const { state, dispatch } = useContext(PokemonsContext);

  const onClickHandler = (pokemon) => {
    console.log(pokemon)
    dispatch({
      type: 'SHOW_DETAILS',
      payload: {
        show: true,
        pokemon: pokemon,
      },
    });
  };

  return state.filteredPokemons.map(pokemon => (
    <li
      key={pokemon.id}
      className={
        pokemon.types.some(type => type === 'Volador')
          ? styles.elementListAir
          : styles.elementListFire
      }
    >
      <ElementImage url={pokemon.image} name={pokemon.name} />
      <span style={{ color: 'red' }}>N. {pokemon.id}</span>
      <span className='name'>{pokemon.name}</span>
      <span className='type'>{pokemon.types.join(', ')}</span>
      <input
        type='button'
        name='+'
        value='+'
        onClick={() => onClickHandler(pokemon)}
      />
    </li>
  ));
};
export default ElementList;
