import {FaEnvelope, FaWhatsapp, FaGithub} from 'react-icons/fa';
import './Footer.css';


function Footer() {
  return (
    <footer className="app-footer">
        <div className="footer-separator">
      <p>© {new Date().getFullYear()} Proyecto PokeAPI</p>
      <p>Desarrollado por Leslie Bellando</p>
    <div className='footer-icons'>
        <ul>
          <li className='footer-icon'>
            <a  href="mailto:lesliebellando@gmail.com"><FaEnvelope /></a>
          </li>
          <li className='footer-icon'>
            <a href="https://wa.me/5493794189166"><FaWhatsapp /></a>
          </li>
          <li className='footer-icon'>
            <a  href="https://github.com/lesliebellando"><FaGithub /></a>
          </li>
        </ul>
    </div>
        </div>
    </footer> 
    );
}
export default Footer;
