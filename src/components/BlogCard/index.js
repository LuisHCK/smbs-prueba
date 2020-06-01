import React, { Component } from "react";
import "./styles.scss";
import img1 from "../../assets/photo-1459664018906-085c36f472af.png";
import img2 from "../../assets/photo-1498842812179-c81beecf902c.png";
import img3 from "../../assets/photo-1501644898242-cfea317d7faf.png";
import img4 from "../../assets/photo-1515377905703-c4788e51af15.png";

const POSTS = [
  {
    name: "Nombre del servicio",
    date: "12/03/2019",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc.",
  },
  {
    name: "Nombre del servicio",
    date: "12/03/2019",
    image: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc.",
  },
  {
    name: "Nombre del servicio",
    date: "12/03/2019",
    image: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc.",
  },
  {
    name: "Nombre del servicio",
    date: "12/03/2019",
    image: img4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nunc.",
  },
];

export default class BlogCard extends Component {
  render() {
    const posts = [];
    POSTS.forEach((post, index) => {
      posts.push(
        <div className="col-xs-12 col-md-3" key={index}>
          <Post post={post} />
        </div>
      );
    });

    return (
      <div id="blog-card" className="row center-xs">
        <div className="col-xs-12">
          <div className="title">BLOG</div>
        </div>
        <div className="col-xs-12 col-md-11">
          <div className="row">{posts}</div>
        </div>
        <div className="col-xs-12">
          <button className="action-button">Ver más</button>
        </div>
      </div>
    );
  }
}

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post">
        <div className="image-container">
          <img src={post.image} alt="" />
          <button className="action-button">Leer más</button>
        </div>
        <div className="post-content">
          <div className="row titles">
            <div className="col-xs-6 text-left">
              <span className="text-muted">{post.date}</span>
            </div>
            <div className="col-xs-6 text-right">
              <span className="text-muted">{post.name}</span>
            </div>
          </div>
          <p className="text-left">{post.description}</p>
        </div>
      </div>
    );
  }
}
