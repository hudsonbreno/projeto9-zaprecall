import GlobalStyle from "./globalStyles";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import cards from "./cards"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      {cards.map((card, indice) => (
        <Card key={indice} indice={indice} card={card} />
      ))}
      <Footer />
    </>
  );
}

export default App;