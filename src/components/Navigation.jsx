import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/listado'>Listado</Link>
        </li>
        <li>
          <Link to='/detalle/:id'>Detalle</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;