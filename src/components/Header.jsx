import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); // cerrar menú al hacer clic
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-spacer" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-3">
            <div className="logo">
            </div>
          </div>
          <div className="col-lg-9 col-sm-9">
            <nav className="mainnav">
                  <div className="logoMobile hidden-lg hidden-sm hidden-md">
                  <Link to="/" onClick={handleClick}>
                    <img alt="Logo CIENQRO" src="/images/logo2.png" />
                  </Link>
                </div> 
              {/* Botón hamburguesa para móviles */}
              <div className="mobileMenu" onClick={toggleMenu}>
                <span />
                <span />
                <span />
              </div>

              {/* Menú principal */}
              <ul className={menuOpen ? 'menu-open' : ''}>
                <li className="has-menu-items active">
                  <Link to="/" onClick={handleClick}>INICIO</Link>
                </li>
                <li>
                  <Link to="/Servicios" onClick={handleClick}>SERVICIOS</Link>
                </li>
                <li>
                  <Link to="/Peritos" onClick={handleClick}>PERITOS</Link>
                </li>
                <li>
                  <Link to="/Proyectos" onClick={handleClick}>PROYECTOS</Link>
                </li>
                <li>
                  <Link to="/About" onClick={handleClick}>NOSOTROS</Link>
                </li>
                {/* 
                  <li className="has-menu-items">
                    <span className="drop_menu">Blogs</span>
                    <ul className="sub-menu">
                      <li><Link to="/BlogDerecha">Blog Right Sidebar</Link></li>
                      <li><Link to="/BlogIzquierda">Blog Left Sidebar</Link></li>
                      <li><Link to="/BlogDetalleDerecha">Blog Details Right</Link></li>
                      <li><Link to="/BlogDetalleIzquierda">Blog Details Left</Link></li>
                    </ul>
                  </li> 
                  */}
                <li>
                  <Link to="/Contact" onClick={handleClick}>CONTACTO</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
