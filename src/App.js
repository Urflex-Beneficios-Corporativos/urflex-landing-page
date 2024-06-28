import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Proposta from "./components/Propostas"
import FAQContainer from "./components/FAQComponent/FAQContainer"

const App = () => {
  return (
    <div>
      <Header />

      <Home />
     
      <Proposta />

      <FAQContainer/>

    </div>
  );
};

export default App;

