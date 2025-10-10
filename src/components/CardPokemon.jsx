
import { Link } from "react-router-dom";


export default function CardPokemon({pokemon}) {
    if (!pokemon) {return (
         <h1>Cargando Pokemon...</h1>
    );}

    
  return (
    <div className="card-pokemon">
    <div className="card-body">
      <Link to={`/pokemon/${pokemon.name}`}>
      <img src={pokemon.sprites.other["official-artwork"].front_default
} alt={pokemon.name} />
</Link>
      <h3>{pokemon.name}</h3>
        <p>ID: {pokemon.id}</p>
        <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
  </div>  </div> ) }
