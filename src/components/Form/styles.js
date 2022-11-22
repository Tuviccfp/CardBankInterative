import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: 500px;
  color: #482968;
  @media (max-width: 767px) {
    position: relative;
    top: -390px;
    left: -145px;
    width: 770px;
    padding: 6px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 23px;
    margin-bottom: 22px;
    @media (max-width: 767px) {
      margin-bottom: 32px;
      font-size: 38px;
      padding: 4px;
    }
    & > input {
      width: 300px;
      padding: 6px;
      height: 28px;
      @media (max-width: 767px) {
        width: 584px;
        height: 66px;
        font-size: 40px;
        padding: 16px;
    }
    }
    #month-year {
      width: 50px;
      height: 37px;
      @media (max-width: 767px) {
        width: 100px;
        height: 66px;
        font-size: 40px;
        padding: 16px;
        
    }
    }
    #cvc-number {
      width: 160px;
      @media (max-width: 767px) {
        width: 234px;
        height: 66px;
        font-size: 40px;
        padding: 16px;
        margin-left: 20px;
    }
    }
  }

  //Estilização pra fazer os inputs MM/YY e CVC ficarem lado a lado
  div {
    display: flex;
    & > label {
      margin-right: 12px;
    }
    #month-year {
      margin-right: 7px;
      @media (max-width: 767px) {
        margin-right: 20px;
    }
    }
  }

  button {
    background-color: #2e1c3f;
    border: transparent;
    color: white;
    border-radius: 4px;
    width: 319px; height: 41px;
    cursor: pointer;
    &:hover {
        background-color: #562f7e;
        transition: 1s;
    }
    @media (max-width: 767px) {
      
    }
  }
`;

export const StyledInput = styled.input`
    &:focus {
        outline: none;
        border: 1px solid #800080;
    }
    @media (max-width: 767px) {
      border: 1px solid grey;
    }
`