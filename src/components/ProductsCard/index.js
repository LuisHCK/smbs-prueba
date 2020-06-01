import React, { Component } from "react";
import "./styles.scss";
import img1 from "../../assets/71Lq91uym6L._SL1500_.png";
import img2 from "../../assets/1791__55026_zoom.png";
import img3 from "../../assets/00123416412171____6__516x640.png";
import img4 from "../../assets/serum-stylista-sleek-anti-encrespamiento.png";

const products = [
  {
    name: "Lorem Ipsum",
    image: img1,
    price: "25.00",
  },
  {
    name: "Lorem Ipsum",
    image: img2,
    price: "25.00",
  },
  {
    name: "Lorem Ipsum",
    image: img3,
    price: "25.00",
  },
  {
    name: "Lorem Ipsum",
    image: img4,
    price: "25.00",
  },
];

export default class ProductsCard extends Component {
  render() {
    const productItems = [];
    products.forEach((product, index) => {
      productItems.push(
        <div className="col-xs-12 col-md-3" key={index}>
          <Product product={product} />
        </div>
      );
    });

    return (
      <div id="products-card" className="row center-xs">
        <div className="col-xs-12">
          <h3 className="section-title">PRODUCTOS DESTACADOS</h3>
        </div>
        <div className="col-xs-12 col-md-11">
          <div className="row">{productItems}</div>
        </div>
        <div className="col-xs-12">
          <button className="action-button">Ver más</button>
        </div>
      </div>
    );
  }
}

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <div className="image-container">
          <img src={product.image} alt="" />
        </div>
        <div className="product-content">
          <p className="product-name">{product.name}</p>
          <strong>{product.price}€</strong>
        </div>
      </div>
    );
  }
}
