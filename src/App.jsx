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
      <Route path="/listado" element={<ListadoPokemon />} />
      <Route path="/detalle/:id" element={<DetallePokemon />} />
    </Routes>
    </div>
  );
}
export default App;