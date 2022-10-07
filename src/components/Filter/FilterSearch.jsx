import { useEffect, useRef, memo, useContext } from 'react';
import { PokemonsContext } from '../../context/PokemonsProvider';

const FilterSearch = () => {
  const { dispatch } = useContext(PokemonsContext);

  const ref = useRef();

  const onClickHandler = () => {
    dispatch({
      type: 'FILTER_NAME',
      payload: {
        search: ref.current.value,
      },
    });
  };
  useEffect(() => console.log('<FilterSearch>'));
  return (
    <>
      <input type='text' name='search' placeholder='Search' ref={ref} />
      <input type='button' onClick={onClickHandler} value='Buscar' />
    </>
  );
};

export default memo(FilterSearch);
