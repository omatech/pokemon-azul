import ElementImage from "./ElementImage";
import styles from "./ElementList.module.scss"

const ElementList = ({pokemons}) =>
    pokemons.map(pokemon =>
        <li key={pokemon.id} className={ pokemon.types.some(type => type === "Volador") ? styles.elementListAir : styles.elementListFire }>
            <ElementImage url={pokemon.image} name={pokemon.name}/>
            <span style={{ color:"red" }}>N. {pokemon.id}</span>
            <span className="name">{pokemon.name}</span>
            <span className="type">{pokemon.types.join (", ")}</span>
        </li>
    )

export default ElementList;