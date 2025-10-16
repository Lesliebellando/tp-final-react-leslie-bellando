
import { Link } from "react-router-dom";
import './CardPokemon.css';

export default function CardPokemon({pokemon}) {
    if (!pokemon) {return (
         <h1>Cargando Pokemon...</h1>
    );}

    
  return (
    <div className="container">
          <div className="card card-pokemon border-0 text-center">
        <Link to={`/pokemon/${pokemon.name}`}>
          <img src={pokemon.sprites.other["official-artwork"].front_default}  className="card-img-top p-3" alt={pokemon.name}/>
        
        </Link>
        </div>
        <div className="card-pokemon-info text-center p-2">
      <h3 className="card-title">{pokemon.name}</h3>
        <p className="card-id">ID {pokemon.id}</p>
        <p className="card-type">Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
  </div>  </div>
  ); }



