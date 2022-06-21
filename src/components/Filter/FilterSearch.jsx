import { useState } from "react";

const FilterSearch = ({setSearch}) => {
    const [valueInput, setValueInput] = useState('');
    const onChangeHandler = ({ target }) => {
        setSearch(target.value) 
        setValueInput(target.value)
    }
    return <input
                type="text"
                onChange={ onChangeHandler }
                name="search"
                placeholder="Search"
                value={valueInput}
            />
}



export default FilterSearch;