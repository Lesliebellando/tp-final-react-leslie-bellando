import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function DetallePokemon() {
const { name } = useParams();
const [pokemon, setPokemon] = useState();


const fetchDetails = async (pokemonName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
setPokemon(data);
} 

useEffect(() => {
  fetchDetails(name);
}, [name]);

return (
    <>
      {!pokemon ? (
        <h2>Cargando Pokémon...</h2>
      ) : (
        <div className="card-pokemon">
          <div className="card-body">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
            <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Experience: {pokemon.base_experience}</p>
            <p>Abilities: {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default DetallePokemon;



 /*  return (
    <div className="card-pokemon">
</>
);
}

export default DetallePokemon;



 /*  return (
    <div className="card-pokemon">
    <div className="card-body">
      <img src={pokemon.sprites.other["official-artwork"].front_default
} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
        <p>ID: {pokemon.id}</p>
        <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Experience: {pokemon.base_experience}</p>
      <p>Habilidades: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
    </div> 
  </div>  
  );
}


 */