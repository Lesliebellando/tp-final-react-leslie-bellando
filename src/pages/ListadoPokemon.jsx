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
    <h1>Listado de Pokemon</h1>
    <div className="card-grid">
    {pokemonsOrdenados.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
    ))}
    </div>
     <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleCargarMas}>Cargar más Pokémon</button>
      </div>
 </>
  );
} 
export default ListadoPokemon; 