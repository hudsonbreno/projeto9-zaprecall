import play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";
import icone_certo from "../assets/icone_certo.png";
import styled from "styled-components";
import cards from "../cards.js";
import { useState } from "react";

export default function Card({indice, card}) {
  const [imagem, setImagem] = useState(play);
  const [riscado, setRiscado] = useState("none");
  const [cor, setCor] = useState("#333333");
  const [frente, setFrente] = useState("flex");
  const [virar, setVirar] = useState("none");
  const [resposta, setResposta] = useState("none");
  const [questaoResposta, setQuestaoResposta] = useState(undefined);

  return (
    <>
      <Carta frente={frente}>
        <h2>Pergunta {indice+1}</h2>
        <button onClick={() => setFrente("none") || setVirar("flex")}>
          <img src={imagem} />
        </button>
      </Carta>
      <CartaEscondida virar={virar}>
        <h2>O que é JSX?</h2>
        <button onClick={() => setVirar("none") || setResposta("flex")}>
          <img src={seta_virar}></img>
        </button>
      </CartaEscondida>
      <CartaResposta lado={resposta} riscado={riscado} cor={cor}>
        <h2>JSX é um sintaxe para escrever HTML dentro do JS</h2>
        <div>
          <button>
            <PrimeiroButton
              onClick={() =>
                setQuestaoResposta("errou") || setRiscado("line-through")||setImagem(icone_erro)
              }
            >
              Não lembrei
            </PrimeiroButton>
          </button>
          <button>
            <SegundoButton
              onClick={() =>
                setQuestaoResposta("quase") ||
                setRiscado("line-through") ||
                setImagem(icone_quase)
              }
            >
              Quase não lembrei
            </SegundoButton>
          </button>
          <button>
            <TerceiroButton
              onClick={() =>
                setQuestaoResposta("acertou") || setRiscado("line-through")||setImagem(icone_certo)
              }
            >
              Zap!
            </TerceiroButton>
          </button>
        </div>
      </CartaResposta>
    </>
  );
}

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
  display: ${(props) => props.frente};
  h2 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;

    color: ${(props) => props.cor};
    text-decoration-line: ${(props) => props.riscado};
    //text-decoration-line: line-through; 
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
  display: ${(props) => props.virar};
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
  color: #ffffff;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PrimeiroButton = styled(ButtonRespostaStyled)`
  background-color: #ff3030;
`;

const SegundoButton = styled(ButtonRespostaStyled)`
  background-color: #ff922e;
`;

const TerceiroButton = styled(ButtonRespostaStyled)`
  background-color: #2fbe34;
`;
