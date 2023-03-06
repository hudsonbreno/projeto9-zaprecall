import { useState } from "react";
import styled from "styled-components";

export default function Start({ logo, setIniciar }) {
  return (
    <TelaInicial>
      <img src={logo} />
      <h1>ZapRecall</h1>
      <button onClick={() => setIniciar(false)}>Iniciar Recall!</button>
    </TelaInicial>
  );
}

const TelaInicial = styled.div`
  img {
    width: 136px;
    height: 161px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;

    color: #ffffff;
  }
  button {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #d70900;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;
