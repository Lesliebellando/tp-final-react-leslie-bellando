import { NavLink } from 'react-router-dom';
import { useState } from "react";
import './Navigation.css';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);


  return (
<section className='nav-container'>
    <nav className="navbar navbar-expand-sm sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={handleClose}><img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
    alt="Logo Pokémon"
    style={{ width: "40px", height: "40px",marginRight: "8px"}}
  />PokeProject</NavLink>
    <button className="navbar-toggler me-2"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
          </div>
    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-auto">
          <NavLink className="nav-link" to='/' onClick={handleClose}>Home</NavLink>
        </li>
        <li className='nav-item mx-auto'>
          <NavLink className="nav-link" to='/pokemon' onClick={handleClose}>Pokemon</NavLink>
        </li>
      </ul>
</div>
    </nav>
  </section> 
  );
}

export default Navigation;
     