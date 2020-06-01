import React from "react";
import "./style.scss";
import img1 from "../../assets/Group 96.png";
import img2 from "../../assets/Group 107.png";
import img3 from "../../assets/Group 111.png";

class ServicesCard extends React.Component {
  render() {
    return (
      <section id="services-card">
        <div className="row center-xs">
          <div className="col-xs-10 col-md-9">
            <div className="title">SERVICIOS</div>
            <p>
              Bellify es la plataforma líder en España en servicios de belleza a
              domicilio. Únete para acceder a los mejores profesionales en
              peluquería, maquillaje, uñas y estética.
            </p>
          </div>
        </div>

        <div className="row center-xs" style={{ marginTop: "4em" }}>
          <div className="col-xs-8 col-md-3">
            <div>
              <img alt="" className="service-icon" src={img1}></img>
            </div>
            <div className="sub-title">Tu belleza</div>
            <p>
              ¿Como quieres sentirte hoy? Simplemente selecciona los servicios
              que se ajusten a tus necesidades de belleza y nosotros nos
              encargaremos del resto. Cualquiera sea la solicitud siempre
              adaptamos un enfoque personalizado para cada cita
            </p>
          </div>

          <div className="col-xs-8 col-md-3">
            <div>
              <img alt="" className="service-icon" src={img2}></img>
            </div>
            <div className="sub-title">Tu belleza</div>
            <p>
              ¿Como quieres sentirte hoy? Simplemente selecciona los servicios
              que se ajusten a tus necesidades de belleza y nosotros nos
              encargaremos del resto. Cualquiera sea la solicitud siempre
              adaptamos un enfoque personalizado para cada cita
            </p>
          </div>
          <div className="col-xs-8 col-md-3">
            <div>
              <img alt="" className="service-icon" src={img3}></img>
            </div>
            <div className="sub-title">Tu belleza</div>
            <p>
              ¿Como quieres sentirte hoy? Simplemente selecciona los servicios
              que se ajusten a tus necesidades de belleza y nosotros nos
              encargaremos del resto. Cualquiera sea la solicitud siempre
              adaptamos un enfoque personalizado para cada cita
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesCard;
