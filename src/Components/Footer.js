import styled from "styled-components";

export default function Footer({concluidos}) {
  return (
    <Rodape>
      <h1 data-test="footer">{concluidos}/8 CONCLUÍDOS</h1>
    </Rodape>
  );
}

const Rodape = styled.div`
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
