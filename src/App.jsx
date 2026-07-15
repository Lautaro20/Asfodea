import Navbar from './components/Navbar';
import CicloGraphic from './components/CicloGraphic';
import RewardsSection from './components/RewardsSection';
import FAQSection from './components/FAQSection';
import './style.css';

export default function App() {
  return (
    <div className="main-wrapper">
      
      {/* 1. Navbar Superior */}
      <Navbar />

      {/* 2. Hero Gris Introductorio */}
      <header className="hero-section">
        <div className="hero-graphic-container">
          <CicloGraphic />
        </div>
        <p className="hero-text fade-in-up">
          En Asfodea tenemos un sistema de devolucion de envases de vidrio, en dónde con cada envase y caja de nuestros productos que devuelves a los puntos de compra de Asfodea: puedes integrarte a nuestro ciclo de reciclado y ganar descuentos y hasta productos gratis!
        </p>
      </header>

      {/* 3. Panel de Usuario y Contenidos Centrales */}
      <div className="maqueta-container fade-in">
        
        {/* Header Estadísticas (Actualizado al nuevo diseño) */}
        <header className="header-area">
          <h1 className="greeting">Hola <em>Pablo Bolatti!</em></h1>
          
          <div className="stats-layout">
            {/* Tarjeta Negra Izquierda */}
            <div className="stats-card-dark">
              <span className="sc-text-small">llevás</span>
              <strong className="sc-text-huge pulse-animation">05</strong>
              <span className="sc-text-small">envases devueltos</span>
            </div>

            {/* Textos Derecha */}
            <div className="stats-details">
              <p className="thanks-text">Asfodea y el planeta te lo agradecen mucho!</p>
              <p className="detail-line">te faltan:</p>
              <p className="detail-highlight">01 envase</p>
              <p className="detail-line">para conseguir</p>
              <p className="detail-highlight">2x1 en productos</p>
            </div>
          </div>
        </header>

        {/* Panel Serpentina de Premios */}
        <RewardsSection />

        {/* Acordeón de FAQs Reforzado */}
        <FAQSection />
        
      </div>
    </div>
  );
}