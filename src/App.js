import logo from "./assets/logo.png";
import play from "./assets/seta_play.png";
import seta_virar from "./assets/seta_virar.png";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { useState } from "react";

function App() {
  const [frente, setFrente] = useState("flex");
  const [virar, setVirar] = useState("none");
  const [resposta, setResposta] = useState("none")
  const [questaoResposta, setQuestaoResposta] = useState(undefined)
  const [cor, setCor] = useState("#333333");
  const [riscado, setRiscado] = useState("none")

  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={logo} />
        <h1>ZapRecall</h1>
      </Header>

      <Carta lado={frente}>
        <h2>Pergunta 1</h2>
        <button onClick={() => setFrente("none") || setVirar("flex")}>
          <img src={play} />
        </button>
      </Carta>

      <CartaEscondida lado={virar}>
        <h2>O que é JSX?</h2>
        <button onClick={() => setVirar("none")|| setResposta("flex")}>
          <img src={seta_virar}></img>
        </button>
      </CartaEscondida>

      <CartaResposta lado={resposta} riscado={riscado} cor={cor}>
        <h2>JSX é um sintaxe para escrever HTML dentro do JS</h2>
        <div>
          <button><PrimeiroButton onClick={() => setQuestaoResposta("errou")||setRiscado("line-through")}>Não lembrei</PrimeiroButton></button>
          <button><SegundoButton onClick={() => setQuestaoResposta("quase")||setRiscado("line-through")}>Quase não lembrei</SegundoButton></button>
          <button><TerceiroButton onClick={() => setQuestaoResposta("acertou")||setRiscado("line-through")}>Zap!</TerceiroButton></button>
        </div>
      </CartaResposta>

      <Footer>
        <h1>0/4 CONCLUÍDOS</h1>
      </Footer>
    </>
  );
}

export default App;

const Header = styled.div`
  margin-top: 44px;
  margin-bottom: 51px;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  h1 {
    width: 203px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Righteous";
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
  img {
    width: 52px;
    height: 60px;
  }
`;

const Carta = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => props.lado};
  h2 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;

    color: ${(props) => props.cor};
    text-decoration-line: ${(props) => props.riscado};
    /* text-decoration-line: line-through; */
  }
  img {
    width: 20px;
    height: 23px;
    color: #333333;
    margin-right: 15px;
  }
  button {
    all: unset;
    cursor: pointer;
    outline: revert;
  }
`;

const CartaEscondida = styled.div`
  width: 299px;
  height: 131px;
  background-color: firebrick;
  display: ${(props) => props.lado};
  flex-direction: column;
  justify-content: space-between;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  h2 {
    margin-top: 18px;
    margin-left: 15px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }

  img {
    width: 30px;
    height: 20px;
    margin-bottom: 6px;
    margin-left: 254px;
  }

  button {
    width: 30px;
    height: 20px;
    margin-bottom: 6px;
    margin-left: 15px;

    all: unset;
    cursor: pointer;
    outline: revert;
  }
`;

const CartaResposta = styled.div`
  width: 299px;
  height: 131px;
  background-color: firebrick;
  display: ${(props) => props.lado};
  flex-direction: column;
  justify-content: space-between;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;


  h2 {
    margin-top: 18px;
    margin-left: 15px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }

  button {
    width: 86px;
    height: 37px;
    margin-bottom: 6px;


    all: unset;
    cursor: pointer;
    outline: revert;
  }

  div {
    margin-bottom: 10px;
    margin-left: 7px;
    display: flex;
    flex-wrap: nowrap;
  }
`;

const ButtonRespostaStyled = styled.div`

  width: 86px;
  height: 37px;
  color: #FFFFFF;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`

const PrimeiroButton =styled(ButtonRespostaStyled)`
  background-color: #FF3030;
`

const SegundoButton =styled(ButtonRespostaStyled)`
  background-color: #FF922E;
`

const TerceiroButton =styled(ButtonRespostaStyled)`
  background-color: #2FBE34;
`

const Footer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  h1 {
    margin-top: 24px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
`;


// const [answer, setAnswer] =useState([])

// errou quase acertou

// answer = ["undefined","undifined","acertei"]

// 0 , 0 , V

// answer[3] = acertou
// setAnswer(answer)

// if(answer[3] === icone_certo){
//   setImagem
// }