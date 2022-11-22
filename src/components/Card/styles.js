import styled from "styled-components";

export const StyledCardFront = styled.div`
  position: absolute;
  left: 150px;
  top: 180px;

  @media (max-width: 767px) {
    position: relative;
    top: -620px;
    left: 120px;
  }
  .infos {
    position: absolute;
    top: 40px;
    margin-left: 35px;
    color: white;
    & > div {
      display: flex;
      & > p {
        width: 180px;
        margin-right: 30px;
      }
    }
    #name-card {
      width: 180px;
    }
    #number-card {
      font-size: 20px;
      font-size: 25px;
      margin-bottom: 15px;
      letter-spacing: 3px;
    }
  }
  .testes {
    @media (max-width: 767px) {
      width: 767px;
      height: 435px;
    }
  }
`;

export const StyledCardBack = styled.div`
  position: absolute;
  left: 240px;
  top: 460px;
  @media (max-width: 767px) {
    position: relative;
    top: -690px;
    left: 420px;
  }
  .cvc-info {
    position: relative;
    top: -152px;
    left: 335px;
    & > div {
    }
  }

  img {
    @media (max-width: 767px) {
      width: 767px;
      height: 435px;
    }
  }
`;
