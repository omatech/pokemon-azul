import { useState } from "react";

const FilterPage = ({ totalPages, currentPage, setCurrentPage }) => {
    const numPages = [...Array(totalPages).keys()];
    
    return <>
        <input 
            type="button"
            name="<<"
            value="<<"
            onClick={ ()=>setCurrentPage(0) }
            disabled = {currentPage<=0}
        />
         <input 
            type="button"
            name="<"
            value="<"
            onClick={()=>setCurrentPage(currentPage-1)}
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