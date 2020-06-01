import React from "react";
import "./styles.scss";
import logo from "../../assets/Group2.png";
import heart from "../../assets/Group 63.svg";
import shoppingCart from "../../assets/Group 66.svg";

class NavBar extends React.Component {
  scrollTo(id) {
    console.log(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-container">
          {/* Logo Container */}
          <div className="logo-container">
            <img src={logo} alt="Logo" onClick={() => this.scrollTo("main-section")}></img>
          </div>
          {/* Nav Items */}
          <div className="nav-items main">
            <div
              id="services"
              className="nav-item"
              onClick={() => this.scrollTo("services-card")}
            >
              Servicios ▼
              <div className="dropdown-menu">
                <li>Peluquería</li>
                <li>Maquillaje</li>
                <li>Uñas</li>
                <li>Estética</li>
              </div>
            </div>
            <div
              className="nav-item"
              onClick={() => this.scrollTo("products-card")}
            >
              Productos
            </div>
            <div
              className="nav-item"
              onClick={() => this.scrollTo("gallery-card")}
            >
              Bodas
            </div>
            <div
              className="nav-item"
              onClick={() => this.scrollTo("gallery-card")}
            >
              Estilos
            </div>
            <div
              className="nav-item"
              onClick={() => this.scrollTo("blog-card")}
            >
              Blog
            </div>
          </div>
          {/* Right Menu */}
          <div className="nav-items right-menu">
            <div className="nav-item text">Iniciar sesión</div>
            <div className="nav-item text">Reserva</div>
            <div className="nav-item icon">ES</div>
            <div className="nav-item icon">
              <img src={heart} alt="Like" />
            </div>
            <div className="nav-item icon" onClick={() => this.scrollTo("products-card")}>
              <img src={shoppingCart} alt="Shopping Cart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
