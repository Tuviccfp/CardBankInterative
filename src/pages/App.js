import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import FormCardBank from "../components/Form";

const StyledHome = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-content: center;
    .banner {
      display: none;
    }
  }
  .banner {
    margin: -30px 0px -30px -30px;
    height: 983px;
    width: 500px;
  }
  .mobile-banner {
    display: none;
    @media (max-width: 767px) {
      display: flex;
      width: 1340px;
      margin: -30px 0px -30px -26px;
    }
  }
`;

export default function HomePage() {
  const [name, setName] = React.useState("XXXXXX XXXXXX XXXXXX");
  const [numberCard, setNumberCard] = React.useState("XXXXXX XXXXXX XXXXXX");
  const [month, setMonth] = React.useState("MM");
  const [year, setYear] = React.useState("YY");
  const [cvc, setCVC] = React.useState("XXX");
  return (
    <StyledHome>
      <img className="mobile-banner" src="../img/bg-main-mobile.png" alt="" />
      <img className="banner" src="../img/bg-main-desktop.png" alt="" />
      <Card
        name={name}
        setName={setName}
        numberCard={numberCard}
        setNumberCard={setNumberCard}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCVC={setCVC}
      />
      <FormCardBank
        name={name}
        setName={setName}
        numberCard={numberCard}
        setNumberCard={setNumberCard}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cvc={cvc}
        setCVC={setCVC}
      />
    </StyledHome>
  );
}
