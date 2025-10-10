import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ListadoPokemon from "./pages/ListadoPokemon";
import DetallePokemon from "./pages/DetallePokemon";
import Navigation from "./components/navigation";

function App() {
  return (
<div>
      <Navigation />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon" element={<ListadoPokemon />} />
      <Route path="/pokemon/:name" element={<DetallePokemon />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
  );
}
export default App;