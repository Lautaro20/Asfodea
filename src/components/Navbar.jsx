import  { useState, useEffect } from 'react';
// Cambia la ruta según dónde guardes el archivo de la imagen en tu proyecto
import logoAsfodea from '../assets/logoAsfodea.png'; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloquea el scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar fade-in-down">
      <div className="nav-brand">
        <img src={logoAsfodea} alt="Asfodea Logo" />
      </div>
      
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#menu" onClick={closeMenu}>menu</a>
        <a href="#productos" onClick={closeMenu}>productos</a>
        <a href="#ciclo" className="active" onClick={closeMenu}>ciclo RRR</a>
      </div>

      <div className="nav-profile"></div>
    </nav>
  );
}