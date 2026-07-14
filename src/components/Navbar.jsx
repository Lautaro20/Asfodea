import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar fade-in-down">
      <div className="nav-brand">ASFODEA</div>
      <div className="nav-menu">
        <a href="#menu">menu</a>
        <a href="#productos">productos</a>
        <a href="#ciclo" className="active">ciclo RRR</a>
      </div>
      <div className="nav-profile"></div>
    </nav>
  );
}