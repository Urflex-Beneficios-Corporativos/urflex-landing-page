import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Proposta from "./components/Propostas"
import FAQContainer from "./components/faq-component/faq-container"
import Footer from "./components/footer-component/footer";

const App = () => {
  return (
    <div>
      <Header />

      <Home />
     
      <Proposta />

      <FAQContainer/>

      <Footer></Footer>

    </div>
  );
};

export default App;

