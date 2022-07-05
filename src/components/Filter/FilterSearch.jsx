import { useEffect, useRef } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

const FilterSearch = () => {
    const { setSearch, search } = useContext(PokemonsContext);
    const ref = useRef();
    const onClickHandler = () => {
        setSearch(ref.current.value);
    }

    // useEffect para devolver el foco al input de search una vez se ha hecho la busqueda
    useEffect(() => {
        ref.current.focus();
    }, [search]);

    return <>
        <input
            type="text"
            name="search"
            placeholder="Search"
            ref={ ref }/>
        <input 
            type="button" 
            onClick={onClickHandler}
            value="Buscar" />
         </>
}

export default FilterSearch;