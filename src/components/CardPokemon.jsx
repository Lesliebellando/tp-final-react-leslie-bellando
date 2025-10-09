
import React from "react";


export default function CardPokemon({pokemon}) {
    if (!pokemon) {return (
         <h1>Cargando Pokemon...</h1>
    );}

  return (
    <div className="card-pokemon">
     
    <div className="card-body"></div> <img src={pokemon.sprites.other["official-artwork"].front_default
} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Experience: {pokemon.base_experience}</p>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
    </div>
  );
}


