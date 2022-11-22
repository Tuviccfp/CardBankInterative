import { StyledCardBack, StyledCardFront } from "./styles";

export default function Card({...props}) {
  return (
    <>
      <StyledCardFront key={"a"}>
        <img className="testes" src="../img/bg-card-front.png" alt="" />
        <div className="infos">
        <img style={{marginBottom: "20px"}} src="../img/card-logo.svg" alt=""/>
          <p id="number-card">{props.numberCard}</p>
          <div>
            <p id="name-card">{props.name}</p>
            <p id="month-card">{props.month}/{props.year}</p>
          </div>
        </div>
      </StyledCardFront>
      <StyledCardBack key={"b"}>
        <img src="../img/bg-card-back.png" alt=""/>
        <div className="cvc-info">
            <p id="cvc-number">{props.cvc}</p>
        </div>
      </StyledCardBack>
    </>
  );
}
