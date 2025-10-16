import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './DetallePokemon.css'


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
  <div className="detail-container">
      <div className="card card-detail mb-3" >
        <div className="row g-0">
          {!pokemon ? (
            <h2>Cargando Pokémon...</h2>
          ) : (
            <>
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                />
              </div>
              <div className="card-information col-md-8">
                <h3 className="card-titulo">{pokemon.name}</h3>
                <p>ID: {pokemon.id}</p>
                <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Experience: {pokemon.base_experience}</p>
                <p>Abilities: {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
              </div>
            </>
          )}
        </div>
      </div>
      </div> 
    </>
  );
}
export default DetallePokemon;

