import React from "react";
import "./App.css";

// Import Components
import NavBar from "./components/NavBar/";
import MainCard from "./components/MainCard/";
import StoreCard from "./components/StoreCard/";
import ServicesCard from "./components/ServicesCard/";
import FooterCard from "./components/FooterCard/";
import GalleryCard from "./components/GalleryCard/";
import ProductsCard from "./components/ProductsCard/";
import BlogCard from "./components/BlogCard/";

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Main Card */}
      <MainCard />

      {/* Store card */}
      <StoreCard />

      {/* Services card */}
      <ServicesCard />

      {/* Gallery Card */}
      <GalleryCard />

      {/* Products Card */}
      <ProductsCard />

      {/* Blog Card */}
      <BlogCard />

      {/* Footer card */}
      <FooterCard />
    </div>
  );
}

export default App;
