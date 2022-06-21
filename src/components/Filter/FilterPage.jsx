import { useState } from "react";

const FilterPage = ({ pages }) => {
    const numPages = [...Array(pages).keys()];
    const onClickHandler = ({ target }) => {

    }

    return <>
        <input 
            type="button"
            name="<<"
            value="<<"
            onClick={onClickHandler}
        />
         <input 
            type="button"
            name="<"
            value="<"
            onClick={onClickHandler}
        />
        { numPages.map(page => 
            <input 
                key={page}
                type="button"
                name={page}
                value={page}
                onClick={onClickHandler}
            />) }
        <input 
            type="button"
            name=">"
            value=">"
            onClick={onClickHandler}
        />
        <input 
            type="button"
            name=">>"
            value=">>"
            onClick={onClickHandler}
        />
    </>
}



export default FilterPage;