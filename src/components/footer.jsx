function Footer() {
  return (
    <footer className="bg-dark text-white py-4 ">
    <div className="container ">
        <div className="row gy-4">
            <div className="col-md-4" >
                <h4 className="fw-bold">Hotel Paraiso</h4>
                <p className="text-white-50">Tu lugar de descanso ideal y comodidad</p>
            </div>
        <div className="col-md-4">
            <h5>Enlaces de interés</h5>
            <ul className="list-unstyled">
                <li><a href="#inicio" className="text-white" > Inicio</a></li>
                <li><a href="#habitaciones" className="text-white"> Habitaciones</a></li>
                <li><a href="#servicios" className="text-white"> Servicios</a></li>
                <li><a href="#contacto" className="text-white"> Contacto</a></li>
            </ul>
        </div>
        <div className="col-md-4">
            <h5>Contáctanos</h5>
            <p className="text-white-50 mb-1">Colombia</p>
            <p className="text-white-50 mb-1">Email:contacto@hotelparaiso.com</p>
        </div>
       
        </div>
        <hr />
        <div className="text-center">
            <p className="mb-0 text-white-50">@ {
                new Date().getFullYear()}  Hotel Paraiso. Todos los derechos reservados.</p>
        </div>
    </div>
    </footer>
  );
}
 
export default Footer;
 