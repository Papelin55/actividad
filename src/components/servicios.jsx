import piscina from '../assets/piscina.jpg';
import restaurante from '../assets/restaurante.jpg';
import lobby from '../assets/lobby.jpg';
import './Servicios.css';

function Servicios() {
    const servicios = [
    {
      nombre: "Piscina",
      imagen: piscina,
      descripcion: "Relájate y disfruta de nuestra piscina al aire libre con vistas panorámicas."
    },
    {
      nombre: "Restaurante",
      imagen: restaurante,
      descripcion: "Disfruta de una experiencia culinaria excepcional en nuestro restaurante de alta gama."
    },
    {
      nombre: "Lobby",
      imagen: lobby,
      descripcion: "Relájate en nuestro acogedor lobby con mobiliario de calidad y un ambiente acogedor."
    }
  ];




  return(
    <section className="py-5 bg-light" id="servicios">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nuestros Servicios</h2>
          <p className="text-secondary">
            Disfruta de nuestros servicios diseñados para tu comodidad y bienestar
          </p>
        </div>
        <div className="row g-4">
        {servicios.map((servicio) => (
          <div className="col-md-4 mb-4" key={servicio.nombre}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-img-top-wrapper">
                <img 
                  src={servicio.imagen} 
                  alt={servicio.nombre} 
                  className="card-img-top servicio-img" 
                />
              </div>
              <div className="card-body text-center">
                <h4 className="fw-bold">{servicio.nombre}</h4>
                <p className="text-secondary">{servicio.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  )
}

export default Servicios;