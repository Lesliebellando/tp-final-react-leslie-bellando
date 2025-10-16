import { useState, useEffect } from "react";
import CardPokemon from "../components/CardPokemon";

function ListadoPokemon() {

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20); // cantidad inicial de pokemones a cargar
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

 const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();

      setPokemons((prev) => {
        if (!prev.some((p) => p.id === data.id)) {
          return [...prev, data];
        }
        return prev;
      });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

useEffect(() => {
const fetchAllPokemons =  (desde, hasta) => {
    for (let i = desde; i <= hasta; i++) {
       fetchPokemons(i);
    } 
};
    fetchAllPokemons(limit -19, limit);
}, [limit]);


  function handleCargarMas() {
    const nuevoLimite = limit + 20; // cada clic carga 20 más
    fetchPokemons(limit + 1, nuevoLimite);
    setLimit(nuevoLimite);
  }
 const pokemonsOrdenados = [...pokemons].sort((a, b) => a.id - b.id);
  return (
 <>
 <div className="container mt-4 mb-4">
  
  <div className="row">
          {pokemonsOrdenados.map((pokemon) => (
            <div key={pokemon.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <CardPokemon pokemon={pokemon} />
          </div>
    ))}
    </div>
     <div className="d-grid gap-2 col-sm-6 col-md-4 col-lg-4 mx-auto">
        <button onClick={handleCargarMas} className="btn-pokemon">Ver más Pokémon</button>
      </div>
    </div>
    
    

 </>
  );
} 
export default ListadoPokemon;  