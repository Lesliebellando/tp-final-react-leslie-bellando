import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pokemon'>Listado</Link>
        </li>
        <li>
          <Link to='/pokemon/:name'>Detalle</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;