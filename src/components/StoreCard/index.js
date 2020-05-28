import React from "react";
import "./style.scss";
import background from "../../assets/shutterstock_638700166.png";

class StoreCard extends React.Component {
  render() {
    let sectionStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      minHeight: "100vh",
    };

    return (
      <section id="store-card" style={sectionStyle}>
        <div>
          <div className="item title">TIENDA ONLINE</div>
          <p className="item description">
            Accede a los productos de belleza utilizados por los mejores
            profesionales.
          </p>
          <div className="item button-container">
            <button>Comprar ahora</button>
          </div>
        </div>
      </section>
    );
  }
}

export default StoreCard;
