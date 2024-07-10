import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Proposta from "./components/Propostas"
import FAQContainer from "./components/faq-component/faq-container"
import Footer from "./components/footer-component/footer";
import Beneficio1 from "./components/Beneficio1";
import Beneficio2 from "./components/Beneficio2";

const App = () => {
  return (
    <div>
      <Header />

      <Home />
     
      <Proposta />

      <Beneficio1 />

      <Beneficio2 />

      <FAQContainer/>

      <Footer></Footer>

    </div>
  );
};

export default App;

