import React from "react";
import "./App.css";

// Import Components
import NavBar from "./components/NavBar/";
import MainCard from './components/MainCard/'
import StoreCard from './components/StoreCard/'
import ServicesCard from './components/ServicesCard/'
import FooterCard from './components/FooterCard/'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      {/* Main Card */}
      <MainCard></MainCard>

      {/* Store card */}
      <StoreCard></StoreCard>

      {/* Services card */}
      <ServicesCard></ServicesCard>
      
      {/* Footer card */}
      <FooterCard></FooterCard>
    </div>
  );
}

export default App;
