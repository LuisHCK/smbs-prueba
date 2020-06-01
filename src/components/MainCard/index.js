import React from "react";
import "../MainCard/styles.scss";
import background from "../../assets/19ALBC0079.png";
import img1 from "../../assets/Group 69.svg";
import img2 from "../../assets/Path 124.svg";
import img3 from "../../assets/Group 76.svg";
import img4 from "../../assets/Group 95.svg";
import img5 from "../../assets/Group 63.svg";

class MainCard extends React.Component {
  render() {
    let sectionStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      minHeight: "100vh",
      marginTop: "-20px", // ...
    };
    return (
      <section className="app-section" id="main-section" style={sectionStyle}>
        <div className="row">
          <div className="col-xs-12 col-md-6 main-text">
            <div className="title">Tu asesor de de belleza a domicilio</div>
            <div className="description">
              Servicios de peluquería, maquillaje, uñas y estética.
              <br />
              Productos imprescindibles.
              <br />
              En cualquier lugar, en cualquier lugar y momento.
            </div>
          </div>
        </div>

        <div className="menu">
          <div className="menu-container">
            <div className="item">
              <img src={img1} alt="" />
              Localidad
            </div>
            <div className="item">
              <img src={img2} alt="" />
              Tratamiento
            </div>
            <div className="item">
              <img src={img3} alt="" />
              Fecha
            </div>
            <div className="item">
              <img src={img4} alt="" />
              Hora
            </div>
            <div className="item">
              <img src={img5} alt="" />
              Reservar
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainCard;
