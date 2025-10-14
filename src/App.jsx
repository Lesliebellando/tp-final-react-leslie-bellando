import { Route, Routes } from "react-router-dom";

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
</style>
import fondo from './assets/Site-background-light.webp'; 
import './App.css'
import Home from "./pages/Home";
import ListadoPokemon from "./pages/ListadoPokemon";
import DetallePokemon from "./pages/DetallePokemon";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container"
     style={{
        backgroundImage: `url(${fondo})`,
      }}>
      <Navigation />
      <div className="app-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon" element={<ListadoPokemon />} />
      <Route path="/pokemon/:name" element={<DetallePokemon />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
    <Footer />
    </div>
  );
}
export default App;