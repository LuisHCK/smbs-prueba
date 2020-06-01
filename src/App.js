import React from "react";
import "./App.css";

// Import Components
import NavBar from "./components/NavBar/";
import MainCard from "./components/MainCard/";
import StoreCard from "./components/StoreCard/";
import ServicesCard from "./components/ServicesCard/";
import FooterCard from "./components/FooterCard/";
import GalleryCard from "./components/GalleryCard/";

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

      {/* Footer card */}
      <FooterCard />
    </div>
  );
}

export default App;
