import HabitacionCard from "./habitacionbard";
import './Habitaciones.css'
import estandar from "../assets/habitacion-estandar.jpg"
import premium from "../assets/habitacion-premium.jpg"
import suite from "../assets/habitacion-suite.jpg"

const habitaciones = [
    {
    id: 1,
    nombre: "Habitacion estandar",
    descripcion: "Habitacion comoda con vista al mar",
    precio: 15000,
    imagen: estandar
    },
    {
    id: 2,
    nombre: "Habitacion estandar",
    descripcion: "Habitacion comoda con vista al mar",
    precio: 15000,
    imagen: premium
    },
    {
    id: 2,
    nombre: "Habitacion estandar",
    descripcion: "Habitacion comoda con vista al mar",
    precio: 15000,
    imagen: suite
    }
]
function Habitaciones(){
    return(
        <section className="py-5 bg-ligth" id="habitaciones">
            <div className="container">
                <h2 className="text-center fw-bold mb-3">Nuestras habitaciones</h2>
                <p className="text-center text-secondary mb-5">
                    Descubre nuestras habitaciones diseñadas para tu comodidad y descanso
                </p>
                <div className="row">
                    {habitaciones.map((habitacion))}
                </div>
            </div>
        </section>
    )
}
function habitaciones (){
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        <img src={imagen} alt={nombre} className="card-img-top" />
        
        <div className="card-body p-4">
          <h4 className="card-title fw-bold">{nombre}</h4>
          <p className="card-text text-secondary">{descripcion}</p>
          <p className="fw-bold">
            Desde: ${precio.toLocaleString('es-CO')} COP
          </p>
          <a href="" className="btn btn-outline-dark d-block mx-auto w-50">Ver más</a>
        </div>
      </div>
    </div>
  )
}

export default HabitacionCard















































