import { Link } from "react-router-dom";
import BackgroundCard from '../assets/pokeball.png';
import PokemonGo from '../assets/pokemon-go (1).png';
import "./Home.css";


function Home() {
  return (
    <div className="home-container">
      <div className="row justify-content-center text-center">
<div className="home-card-2 d-grid gap-2 col-sm-12 col-md-12 col-lg-4 mx-auto">
 
  <div className="card-body">
    <h2 className="card-title ">¡Bienvenido/a al PokeProject!</h2>
    <p className="card-text ">Una mini aplicación web creada como parte del trabajo final del curso de Desarrollo Web Front-end de la UTN.</p>
   <p className="card-text">
    <Link to="/pokemon"><img src={BackgroundCard} alt="Pokébola" className="card-img-top pokeball-img" /></Link>  </p>
               <p className="card-text"> <strong>Tecnologías utilizadas</strong>  </p>
              <ul className="tech-icons list-unstyled d-flex justify-content-center gap-3">
                <li><i className="fa-brands fa-react"></i></li>
                <li><i className="fa-brands fa-bootstrap"></i></li>
                <li><i className="fa-brands fa-html5"></i></li>
                <li><i className="fa-brands fa-css3-alt"></i></li>
                <li><i className="fa-brands fa-js"></i></li>
              </ul>
  
</div>
</div>
<div className="home-card d-grid gap-2 col-sm-12 col-md-6 col-lg-4 mx-auto">
  <div className="card-body-2">
    <h3 className="card-description">¿De qué se trata?</h3>
    <p className="card-text">¡Explora el mundo Pokémon desde tu pantalla a través de datos obtenidos desde la <strong>PokéAPI</strong>! </p> 
  
  <Link to="/pokemon"><img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="Pikachu"
            className="card-img-top mx-auto"
          /></Link>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Navegá entre diferentes Pokémon y descubrílos</li>
    <li className="list-group-item">Accedé al detalle de cada uno y conoce sus tipos, habilidades, experiencia y mucho más. </li>
  </ul>

  </div>
</div>

<div className="home-card-2 d-grid gap-2 col-sm-12 col-md-6 col-lg-4 mx-auto" >

  <div className="card-body">
    <h3 className="card-title">🚀 Empezá tu aventura</h3>
 <p className="card-text">Hacé clic abajo para ver la PokeLista</p>
  <Link to="/pokemon"><img src={PokemonGo} alt="PokemonGo" className="card-img-top pokeball-img" /></Link>
  <Link to="/pokemon" className="btn btn-pokemon">Ver Pokemones</Link> 
 <p className="card-text">¡Y no olvides capturarlos a todos!</p>
     
  </div>
</div>

</div>
</div>
  );
}

export default Home



// function Home() {
//   return (
//     <div className="home-container">
// <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className  ="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active text-center">
//       <h1 className="home-title">¡Bienvenido/a al PokeProject!</h1>
//       <h3 className="home-description"> Una mini aplicación web creada como parte del trabajo final del curso de Desarrollo Web Front-end de la UTN.
//       </h3>
//       <h3 className="tech-description">👉 Tecnologías utilizadas:
//         <ul className="tech-icons">
//           <li><i className="fa-brands fa-react"></i></li>
//           <li><i className="fa-brands fa-vuejs"></i></li>
//           <li><i className="fa-brands fa-js-square"></i></li>
//           <li><i className="fa-brands fa-bootstrap"></i></li>
//           <li><i className="fa-brands fa-html5"></i></li>
//           <li><i className="fa-brands fa-css3-alt"></i></li>
//         </ul>
//       </h3>
//     </div>
   
//     <div className="carousel-item">
//        <h4 className="home-description">¡Explora el mundo Pokémon desde tu pantalla a través de datos obtenidos desde la <strong>PokéAPI</strong>!</h4>
//    <h4 className="home-description">Navegá entre diferentes Pokémon y descubrílos</h4>
//    <h4>Accedé al detalle de cada uno y conoce sus tipos, habilidades, experiencia y mucho más.</h4>
//     </div>
//     <div className="carousel-item">
//    <h2 className="home-description">🚀 Empezá tu aventura</h2>
//   <h4 className="home-description">Hacé clic abajo para ver el listado</h4>
//             <Link to="/pokemon" className="btn btn-pokemon">Ver Pokemones</Link>
//    <h4 className="home-description">¡Y no olvides capturarlos a todos!</h4>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
// </div>
//   );
// }
























































// export default Home;