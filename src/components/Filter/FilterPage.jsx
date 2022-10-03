import { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

const FilterPage = () => {
    const { dispatch, state } = useContext(PokemonsContext);
    const numPages = [...Array(state.totalPages).keys()];

    const onClickHandler = (currentPage) => {        
        dispatch({
            type: 'UPDATE_PAGINATION',
            payload: {
                currentPage: currentPage
            }
        })
    } 
    
    return <>
        <input 
            type="button"
            name="<<"
            value="<<"
            onClick={ ()=>onClickHandler(1) }
            disabled = {state.currentPage<=1}
        />
         <input 
            type="button"
            name="<"
            value="<"
            onClick={ ()=>onClickHandler(state.currentPage-1)}
            disabled = {state.currentPage <= 1}
        />
        { numPages.map(page => 
            <input 
                key={page}
                type="button"
                name={page}
                value={page+1}
                onClick={({target})=>onClickHandler(target.value)}
                disabled = {page == state.currentPage-1}
            />) }
        <input 
            type="button"
            name=">"
            value=">"
            onClick={ ()=>onClickHandler(state.currentPage + 1) }
            disabled = {state.currentPage >= numPages.length -1}
        />
        <input 
            type="button"
            name=">>"
            value=">>"
            onClick={ ()=>onClickHandler(numPages.length) }
            disabled = {state.currentPage >= numPages.length -1}
        />
    </>
}

export default FilterPage;