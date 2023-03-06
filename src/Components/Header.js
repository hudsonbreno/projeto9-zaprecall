import logo from "../assets/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Cabecalho>
      <img src={logo} />
      <h1>ZapRecall</h1>
    </Cabecalho>
  );
}

const Cabecalho = styled.div`
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
