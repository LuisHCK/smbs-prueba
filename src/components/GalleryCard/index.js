import React, { Component } from "react";
import "./styles.scss";
import img1 from "../../assets/19ALBC0373.png";

const gallery = [
  {
    title: "Peluquería",
    background:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Peluquería",
    background:
      "https://images.unsplash.com/photo-1476360806206-b2f7af3fbda4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Uñas",
    background:
      "https://images.unsplash.com/photo-1542295474-5e78124e5d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Estética",
    background:
      "https://images.unsplash.com/photo-1515212799670-2481411f0d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Grupos",
    background:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Paquetes",
    background:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=75",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
  },
  {
    title: "Bodas",
    background: img1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc. Interdum et malesuada fames ac ante ipsum.",
    full_row: true,
  },
];

export default class GalleryCard extends Component {
  render() {
    const galleryItems = [];
    gallery.forEach((item, index) => {
      galleryItems.push(
        <div
          className={("col-xs-12", item.full_row ? "col-md-12" : "col-md-4")}
          key={index}
        >
          <GalleryItem item={item} />
        </div>
      );
    });

    return (
      <div id="gallery-card">
        <div className="row">{galleryItems}</div>
      </div>
    );
  }
}

class GalleryItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div
        className={`gallery-item ${ item.full_row? 'full-row':'' }`}
        style={{ backgroundImage: `url("${item.background}")` }}
      >
        <div className="item-content">
          <h4>{item.title}</h4>
          <p className="description">{item.text}</p>
          <button className="action-button">Contratar</button>
        </div>
      </div>
    );
  }
}
