import GlobalStyle from "./globalStyles";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import cards from "./cards";
import { useState } from "react";

function App() {

  const[concluidos, setConcluidos] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Header/>
      {cards.map((card, indice) => (
        <Card key={indice} indice={indice} card={card} concluidos = {concluidos} setConcluidos = {setConcluidos} />
      ))}
      <Footer concluidos={concluidos}/>
    </>
  );
}

export default App;