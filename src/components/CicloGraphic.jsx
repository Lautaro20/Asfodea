// 1. Importas el video usando la ruta relativa
import videoAnimacion from '../assets/animacion fracsos.mp4';

export default function CicloGraphic() {
  return (
    // 2. Usas la variable importada en el atributo src
    <video 
      src={videoAnimacion} 
      autoPlay 
      loop 
      muted 
      playsInline
      className="animated-video fade-in"
    >
      Tu navegador no soporta la reproducción de videos.
    </video>
  );
}