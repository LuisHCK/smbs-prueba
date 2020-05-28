import React from "react";
import "./styles.scss";
import logo from "../../assets/Group2.png";
import heart from "../../assets/Group 63.svg";
import shoppingCart from "../../assets/Group 66.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-container">
          {/* Logo Container */}
          <div className="logo-container">
            <img src={logo} alt="Logo"></img>
          </div>
          {/* Nav Items */}
          <div className="nav-items main">
            <div className="nav-item">Servicios</div>
            <div className="nav-item">Productos</div>
            <div className="nav-item">Bodas</div>
            <div className="nav-item">Estilos</div>
            <div className="nav-item">Blog</div>
          </div>
          {/* Right Menu */}
          <div className="nav-items right-menu">
            <div className="nav-item text">Iniciar sesión</div>
            <div className="nav-item text">Reserva</div>
            <div className="nav-item icon">ES</div>
            <div className="nav-item icon">
              <img src={heart} alt="Like" />
            </div>
            <div className="nav-item icon">
              <img src={shoppingCart} alt="Shopping Cart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
