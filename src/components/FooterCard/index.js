import React from "react";
import "./style.scss";
import storesIcon from "../../assets/stores.png";

class StoreCard extends React.Component {
  render() {
    return (
      <section id="footer-card">
        <div className="row center-xs">
          <div className="col-xs-6 col-md-2">
            <div className="title">App</div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={storesIcon}
              alt=""
            ></img>
          </div>
          <div className="col-xs-6 col-md-2">
            <div className="title">Tienda</div>
            <div className="item">Servicios</div>
            <div className="item">Productos</div>
            <div className="item">Bodas</div>
            <div className="item">Estilos</div>
            <div className="item">Locales Bellify</div>
            <div className="item">Zonas Bellify</div>
          </div>
          <div className="col-xs-6 col-md-2">
            <div className="title">Sobre Bellify</div>
            <div className="item">Nuestro equipo</div>
            <div className="item">Partners</div>
            <div className="item">Blog</div>
            <div className="item">Reviews</div>
            <div className="item">Prensa y medios</div>
            <div className="item">Unete a nosotros</div>
          </div>
          <div className="col-xs-6 col-md-2">
            <div className="title">Ayuda</div>
            <div className="item">FAQ</div>
            <div className="item">Terminos y condiciones</div>
            <div className="item">Privacidad</div>
            <div className="item">Contacto</div>
          </div>
          <div className="col-xs-6 col-md-2">
            <div className="title">Síguenos</div>
            <div className="row">
              <div className="col-xs-4">
                <img
                  className="img-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="fb"
                ></img>
              </div>
              <div className="col-xs-4">
                <img
                  className="img-icon"
                  src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-icono-de-twitter-logo-by-vexels.png"
                  alt="fb"
                ></img>
              </div>
              <div className="col-xs-4">
                <img
                  className="img-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                  alt="fb"
                ></img>
              </div>
            </div>
          </div>

          <div className="col-xs-12">
            <div className="divider"></div>
          </div>

          <div className="col-xs-8">
            <div className="newsletter">
              <span>Newsletter</span>
              <input className="input" placeholder="Nombre" />
              <input className="input" placeholder="Correo electrónico" />
            </div>
          </div>
          <div className="col-xs-4">
            <img
              className="img-icon"
              src="https://www.cubasaldo.com/images/credit-card-accepted-png-1.png"
              alt="cards"
            ></img>
          </div>
        </div>
      </section>
    );
  }
}

export default StoreCard;
