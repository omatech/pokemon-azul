import { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";

const FilterPage = () => {
    const { dispatch } = useContext(PokemonsContext);

    const numPages = [...Array(totalPages).keys()];
/**
 * @TODO acabar de arreglar la pagination, abajo pasarle bien los parametros al onclickhandler
 */
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
            onClick={ onClickHandler(0) }
            disabled = {currentPage<=0}
        />
         <input 
            type="button"
            name="<"
            value="<"
            onClick={onClickHandler(currentPage-1)}
            disabled = {currentPage<=0}
        />
        { numPages.map(page => 
            <input 
                key={page}
                type="button"
                name={page}
                value={page+1}
                onClick={({target})=>setCurrentPage(target.value-1)}
            />) }
        <input 
            type="button"
            name=">"
            value=">"
            onClick={ ()=>setCurrentPage(currentPage + 1) }
            disabled = {currentPage >= numPages.length -1}
        />
        <input 
            type="button"
            name=">>"
            value=">>"
            onClick={ ()=>setCurrentPage(numPages.length-1) }
            disabled = {currentPage >= numPages.length -1}
        />
    </>
}

export default FilterPage;