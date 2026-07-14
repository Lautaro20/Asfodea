

export default function RewardsSection() {
  // PROGRESO: 2 significa que se ilumina hasta la 3ra tarjeta (el 2x1)
  const progresoDesbloqueado = 2; 

  const caminoSerpiente = [
    [0, 0], [0, 1], [0, 2], // Fila 1 (Izquierda a Derecha)
    [1, 2], [1, 1], [1, 0], // Fila 2 (Derecha a Izquierda)
    [2, 0], [2, 1], [2, 2], // Fila 3 (Izquierda a Derecha)
    [3, 2], [3, 1], [3, 0]  // Fila 4 (Derecha a Izquierda)
  ];

  const obtenerClaseConector = (fila, columna, tipoConector) => {
    let clases = ` ${tipoConector}`;

    const indexCeldaActual = caminoSerpiente.findIndex(
      ([r, c]) => r === fila && c === columna
    );

    if (indexCeldaActual === -1) return clases;

    // La celda de destino es simplemente el siguiente índice en la serpiente
    const indexCeldaDestino = indexCeldaActual + 1;

    // Si tanto la celda actual como la siguiente están desbloqueadas, activa la línea
    if (
      indexCeldaDestino < caminoSerpiente.length &&
      indexCeldaActual <= progresoDesbloqueado &&
      indexCeldaDestino <= progresoDesbloqueado
    ) {
      clases += ' active-path';
    }

    return clases;
  };

  const obtenerEstiloDelay = (fila, columna) => {
    const index = caminoSerpiente.findIndex(([r, c]) => r === fila && c === columna);
    if (index !== -1 && index <= progresoDesbloqueado) {
      return { '--delay': `${index * 0.6}s` };
    }
    return {};
  };

  return (
    <section className="rewards-section">
      <h2 className="section-title">Tus próximos descuentos y premios</h2>
      
      <div className="grid-container">
        {/* FILA 1: Flujo Normal (Izquierda a Derecha) */}
        <div className={`grid-cell${obtenerClaseConector(0, 0, 'connector-h')}`} style={obtenerEstiloDelay(0, 0)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-faded">Retirado</div>
            <div className="card-bottom text-faded text-small">cobraste tu<br/>premio/descuento<br/>el 12/05</div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(0, 1, 'connector-h')}`} style={obtenerEstiloDelay(0, 1)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-faded">Retirado</div>
            <div className="card-bottom text-faded text-small">cobraste tu<br/>premio/descuento<br/>el 12/05</div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(0, 2, 'connector-v-down')}`} style={obtenerEstiloDelay(0, 2)}>
          <div className="m-card card-hover-effect highlighted-card">
            <div className="card-top top-black">2x1</div>
            <div className="card-bottom text-small">en productos<br/>seccionados<br/>hidratantes</div>
          </div>
        </div>

        {/* FILA 2: Flujo Inverso (Los divs en HTML van de izq a der, pero conectan de der a izq) */}
        <div className={`grid-cell${obtenerClaseConector(1, 0, 'connector-v-down')}`} style={obtenerEstiloDelay(1, 0)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-grey">20% off</div>
            <div className="card-bottom text-small">en productos de la<br/>linea devuelta</div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(1, 1, 'connector-h-reverse')}`} style={obtenerEstiloDelay(1, 1)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-grey">GRATIS!</div>
            <div className="card-bottom text-small">cualquier producto!<br/>no incluye promos ni<br/>lazamientos especiales</div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(1, 2, 'connector-h-reverse')}`} style={obtenerEstiloDelay(1, 2)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-grey">10% off</div>
            <div className="card-bottom text-small">en cualquier<br/>producto individual!</div>
          </div>
        </div>

        {/* FILA 3: Flujo Normal (Izquierda a Derecha) */}
        <div className={`grid-cell${obtenerClaseConector(2, 0, 'connector-h')}`} style={obtenerEstiloDelay(2, 0)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(2, 1, 'connector-h')}`} style={obtenerEstiloDelay(2, 1)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(2, 2, 'connector-v-down')}`} style={obtenerEstiloDelay(2, 2)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>

        {/* FILA 4: Flujo Inverso */}
        <div className={`grid-cell`} style={obtenerEstiloDelay(3, 0)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(3, 1, 'connector-h-reverse')}`} style={obtenerEstiloDelay(3, 1)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>
        <div className={`grid-cell${obtenerClaseConector(3, 2, 'connector-h-reverse')}`} style={obtenerEstiloDelay(3, 2)}>
          <div className="m-card card-hover-effect">
            <div className="card-top top-locked"><i className="fa-solid fa-lock"></i></div>
            <div className="card-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}